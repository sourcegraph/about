module github.com/sourcegraph/about

go 1.13

require (
	github.com/google/go-github v17.0.0+incompatible
	github.com/google/go-github/v31 v31.0.0
	github.com/sourcegraph/docsite v1.6.0 // indirect
	golang.org/x/oauth2 v0.0.0-20200107190931-bf48bf16ab8d
)

replace github.com/sourcegraph/docsite => github.com/jyavorska/docsite v1.8.3-0.20210930071952-c6a6c94c17fe
