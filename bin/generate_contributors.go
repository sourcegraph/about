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

	"github.com/google/go-github/github" // with go modules enabled (GO111MODULE=on or outside GOPATH)
	"golang.org/x/oauth2"
)

type IssueAuthorDetails struct {
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

	// (HACK): Generate list of Sourcegraphers to exclude from the list of contributors
	//
	// To manually re-generate the `sourcegraphers` map:
	// Go to https://github.com/orgs/sourcegraph/teams/team/members
	// Run this code in the console
	//
	// 		let sourcegraphers = [];
	// 		window.document.querySelectorAll('li.table-list-item').forEach(
	//   		el => sourcegraphers.push(`"${el.dataset.bulkActionsId.trim()}": "",`)
	// 		)
	// 		copy(`sourcegraphers := map[string]string{\n${sourcegraphers.join('\n  ')}\n}`)
	//
	// TODO: Replace with API call as part of the running of this script
	sourcegraphers := map[string]string{
		"attfarhan":       "",
		"beyang":          "",
		"bot":             "",
		"chrismwendt":     "",
		"christinaforney": "",
		"dadlerj":         "",
		"efritz":          "",
		"felixfbecker":    "",
		"ggilmore":        "",
		"ijt":             "",
		"KattMingMing":    "",
		"keegancsmith":    "",
		"kevinchen94":     "",
		"kevinzliu":       "",
		"lguychard":       "",
		"mrnugget":        "",
		"nicksnyder":      "",
		"renovate":        "",
		"renovate[bot]":   "",
		"ryan-blunden":    "",
		"rvantonder":      "",
		"slimsag":         "",
		"sqs":             "",
		"todo":            "",
		"tsenart":         "",
		"uwedeportivo":    "",
		"vanesa":          "",
	}

	issueDate, err := time.Parse(time.RFC3339, lastReleaseDate)
	if err != nil {
		log.Fatal("error parsing date", err)
		return
	}
	contributors := make(map[string]IssueAuthorDetails)
	page := 0

	// First print via repo
	for _, repo := range repos {

		for page < 15 {
			opts := &github.IssueListByRepoOptions{Since: issueDate, ListOptions: github.ListOptions{PerPage: 100, Page: page}}
			issues, _, err := client.Issues.ListByRepo(ctx, "sourcegraph", repo, opts)
			if err != nil {
				log.Fatal("error fetching repo", err)
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
	}

	for _, contributor := range contributors {
		fmt.Println(fmt.Sprintf("- [@%s](%s)", contributor.handle, contributor.url))
	}
}
