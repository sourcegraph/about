PORT ?= 5082

.PHONY: serve docsite-check

.bin/docsite: go.mod go.sum
	GOBIN=${PWD}/.bin go install github.com/sourcegraph/docsite/cmd/docsite

serve: .bin/docsite
	.bin/docsite serve -http=:${PORT}

docsite-check: .bin/docsite
	.bin/docsite check