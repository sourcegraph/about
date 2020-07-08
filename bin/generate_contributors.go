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

type ContributorDetails struct {
	handle string
	url    string
}

func main() {
	ctx := context.Background()
	ts := oauth2.StaticTokenSource(
		&oauth2.Token{AccessToken: os.Getenv("GITHUB_TOKEN")},
	)
	tc := oauth2.NewClient(ctx, ts)
	client := github.NewClient(tc)
	repos := [...]string{"deploy-sourcegraph", "lang-typescript", "sourcegraph", "about", "go-langserver", "lang-go", "lang-python", "sourcegraph-basic-code-intel", "python-language-server"}

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
	sourcegraphTeamMembers, _, err := client.Teams.ListTeamMembersBySlug(ctx, "sourcegraph", "everyone", teamOpt)

	// Extract teammate usernames
	sourcegraphUsernames := make(map[string]struct{}, len(sourcegraphTeamMembers))

	for _, m := range sourcegraphTeamMembers {
		sourcegraphUsernames[*m.Login] = struct{}{}
	}

	contributors := make(map[string]ContributorDetails)
	page := 0

	// First print via repo
	for _, repo := range repos {
		// Get all issue contributors
		findIssues: for {
			opts := &github.IssueListByRepoOptions{Since: issueDate, ListOptions: github.ListOptions{PerPage: 100, Page: page}}
			issues, _, err := client.Issues.ListByRepo(ctx, "sourcegraph", repo, opts)
			if err != nil {
				log.Fatal("error fetching issues", err)
				return
			}

			if len(issues) == 0 {
				break findIssues
			}

			for _, issue := range issues {
				if _, ok := sourcegraphUsernames[*issue.User.Login]; ok {
					continue
				}

				contributors[*issue.User.Login] = ContributorDetails{handle: *issue.User.Login, url: *issue.User.HTMLURL}
			}
			page++
		}

		// Get all created PR contributors
		page = 0

		findPrs: for {
			repoOpts := &github.PullRequestListOptions{State: "all", ListOptions: github.ListOptions{PerPage: 100, Page: page}}
			prs, _, err := client.PullRequests.List(ctx, "sourcegraph", repo, repoOpts)
			if err != nil {
				log.Fatal("error fetching pull requests", err)
				return
			}

			if len(prs) == 0 {
				break findPrs
			}

			for _, pr := range prs {
				
				if pr.CreatedAt.Before(issueDate) {
					break findPrs
				}
				if _, ok := sourcegraphUsernames[*pr.User.Login]; ok {
					continue
				}

				contributors[*pr.User.Login] = ContributorDetails{handle: *pr.User.Login, url: *pr.User.HTMLURL}
			}
			page++
		}
	}

	for _, contributor := range contributors {
		fmt.Println(fmt.Sprintf("- [@%s](%s)", contributor.handle, contributor.url))
	}
}
