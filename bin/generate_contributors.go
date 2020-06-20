// Generate a list of non-Sourcegraph contributors for this release
//
// Usage: GO111MODULE=on go run bin/generate_contributors.go
//

package main

import (
	"bufio"
	"context"
	"fmt"
	"log"
	"os"
	"time"

	"github.com/google/go-github/v31/github" // with go modules enabled (GO111MODULE=on or outside GOPATH)
	"golang.org/x/oauth2"
)

type IssueAuthorDetails struct {
	handle string
	url    string
}

func MapUsers(vs []*github.User, f func(*github.User) string) map[string]string {
    vsm := make(map[string]string)
    for _, v := range vs {
		u := f(v)
		vsm[u] = ""
    }
    return vsm
}

func main() {
	ctx := context.Background()
	ts := oauth2.StaticTokenSource(
		&oauth2.Token{AccessToken: os.Getenv("GITHUB_TOKEN")},
	)
	tc := oauth2.NewClient(ctx, ts)
	client := github.NewClient(tc)
	// repos := [...]string{"deploy-sourcegraph", "lang-typescript", "sourcegraph", "about", "go-langserver", "lang-go", "lang-python", "sourcegraph-basic-code-intel", "python-language-server"}
	repos := [...]string{"lang-typescript", "sourcegraph", "about"}

	// Date of last release
	fmt.Print("Last release date (yyyy-mm-dd): ")
	dateInput, _ := bufio.NewReader(os.Stdin).ReadString('\n')
	lastReleaseDate := fmt.Sprintf("%s%s", dateInput[:len(dateInput)-1], "T12:00:00.000Z")

	issueDate, err := time.Parse(time.RFC3339, lastReleaseDate)
	if err != nil {
		log.Fatal("error parsing date", err)
		return
	}

	// Get members of our team
	teamOpt := &github.TeamListTeamMembersOptions{Role: "all", ListOptions: github.ListOptions{PerPage: 100, Page: 1}}
	sourcegraphTeam, _, err := client.Teams.ListTeamMembersBySlug(ctx, "sourcegraph", "everyone", teamOpt)

	getUsername := func(m *github.User) string {
		return *m.Login
	}

	sourcegraphers := MapUsers(sourcegraphTeam, getUsername)
	contributors := make(map[string]IssueAuthorDetails)
	page := 0
	prRangeOk := true

	// First print via repo
	for _, repo := range repos {
		page = 0

		// Get all issue contributors
		for page < 15 {
			opts := &github.IssueListByRepoOptions{Since: issueDate, ListOptions: github.ListOptions{PerPage: 100, Page: page}}
			issues, _, err := client.Issues.ListByRepo(ctx, "sourcegraph", repo, opts)
			if err != nil {
				log.Fatal("error fetching issues", err)
				return
			}

			if len(issues) == 0 {
				break
			}

			for _, issue := range issues {
				if _, ok := sourcegraphers[*issue.User.Login]; ok {
					continue
				}

				contributors[*issue.User.Login] = IssueAuthorDetails{handle: *issue.User.Login, url: *issue.User.HTMLURL}
			}
			page++
		}

		// Get all created PR contributors
		prRangeOk = true
		page = 0

		for page < 15 && prRangeOk{
			repoOpts := &github.PullRequestListOptions{State: "all", ListOptions: github.ListOptions{PerPage: 100, Page: page}}
			prs, _, err := client.PullRequests.List(ctx, "sourcegraph", repo, repoOpts)
			if err != nil {
				log.Fatal("error fetching pull requests", err)
				return
			}

			if len(prs) == 0 {
				break
			}

			for _, pr := range prs {
				
				if pr.CreatedAt.Before(issueDate) {
					prRangeOk = false
					break
				}
				if _, ok := sourcegraphers[*pr.User.Login]; ok {
					continue
				}

				fmt.Println(pr.CreatedAt)

				contributors[*pr.User.Login] = IssueAuthorDetails{handle: *pr.User.Login, url: *pr.User.HTMLURL}
			}
			page++
		}
	}

	for _, contributor := range contributors {
		fmt.Println(fmt.Sprintf("- [@%s](%s)", contributor.handle, contributor.url))
	}
}
