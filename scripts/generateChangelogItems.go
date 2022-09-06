// This generates a list of changelog items for release posts
// Process: https://handbook.sourcegraph.com/departments/marketing/product-marketing/release_post_process/
// Usage Example: go run scripts/generateChangelogItems.go -versions 3.43.1 -i ../sourcegraph/CHANGELOG.md

package main

import (
	"bufio"
	"encoding/json"
	"flag"
	"fmt"
	"io"
	"log"
	"os"
	"regexp"
	"strings"
)

var (
	inputFile      = flag.String("i", "-", "input CHANGELOG.md file")
	versionPattern = flag.String("versions", "3.19", "include items in version headings containing this string")
)

func main() {
	log.SetFlags(0)
	flag.Parse()

	if flag.NArg() != 0 {
		flag.Usage()
		os.Exit(1)
	}

	var f io.Reader
	if *inputFile == "-" {
		log.Println("# Reading from stdin...")
		f = os.Stdin
	} else {
		var err error
		f, err = os.Open(*inputFile)
		if err != nil {
			log.Fatal(err)
		}
	}

	scanner := bufio.NewScanner(f)
	var (
		versionHeading    string
		changeTypeHeading string
	)
	const (
		versionHeadingPrefix    = "## "
		changeTypeHeadingPrefix = "### "
		itemPrefix              = "- "
	)
	match := func(versionHeading string) bool {
		return strings.Contains(versionHeading, *versionPattern)
	}
	for scanner.Scan() {
		line := scanner.Text()

		if strings.HasPrefix(line, versionHeadingPrefix) {
			versionHeading = strings.TrimPrefix(line, versionHeadingPrefix)
			if match(versionHeading) {
				fmt.Println("#", versionHeading)
			}
			continue
		}

		if strings.HasPrefix(line, changeTypeHeadingPrefix) {
			changeTypeHeading = strings.TrimPrefix(line, changeTypeHeadingPrefix)
			if match(versionHeading) {
				fmt.Println("#", changeTypeHeading)
			}
			continue
		}

		if match(versionHeading) {
			if strings.HasPrefix(line, itemPrefix) {
				description, url, maybeCategory := parseItem(strings.TrimSpace(strings.TrimPrefix(line, itemPrefix)))
				fmt.Printf("  - description: %s\n    url: %s\n    category: %s\n",
					quoteYAMLString(description), quoteYAMLString(url), quoteYAMLString(maybeCategory))
			}
		}
	}
	if err := scanner.Err(); err != nil {
		log.Fatal(err)
	}
}

var stringNeedsYAMLEscaping = regexp.MustCompile(`[^\w /.,:]`)

func quoteYAMLString(str string) string {
	if !stringNeedsYAMLEscaping.MatchString(str) && !strings.Contains(str, ": ") {
		return str
	}
	quoted, _ := json.Marshal(str)
	return string(quoted)
}

var (
	// Matches items with a trailing issue link, like `The cool feature. [#1234](https://example.com)`.
	itemTrailingIssueLink = regexp.MustCompile(`^(.*)\s+\[#\d+\]\(([^)]+)\)$`)

	// Matches items with an embedded doc link, like `The [cool feature](https://example.com) ...`.
	itemDocLink = regexp.MustCompile(`^(.*)\[([^]]+)\]\(([^)]+)\)(.*)$`)
)

func parseItem(item string) (description, url, maybeCategory string) {
	matches := itemTrailingIssueLink.FindStringSubmatch(item)
	if len(matches) > 0 {
		description = matches[1]
		return description, matches[2], guessCategory(description)
	}

	matches = itemDocLink.FindStringSubmatch(item)
	if len(matches) > 0 {
		description = matches[1] + matches[2] + matches[4]
		return description, matches[3], guessCategory(description)
	}

	return item, "", guessCategory(item)
}

func guessCategory(text string) string {
	text = strings.ToLower(text)
	for _, g := range categoryGuesses {
		if strings.Contains(text, g[0]) {
			return g[1]
		}
	}
	return ""
}

var categoryGuesses = [][2]string{
	{"search", "Search"},
	{"admin", "Admin"},
	{"observability", "Admin"},
	{"password", "Admin"},
	{"certificate", "Admin"},
	{"campaign", "Batch Changes"},
	{"batch", "Batch Changes"},
	{"graphql", "API"},
	{"tls", "Admin"},
	{"jaeger", "Admin"},
	{"repo", "Repositories"},
	{"migration", "Admin"},
}
