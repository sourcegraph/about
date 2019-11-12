# Commit message guidelines

Having consistent commit messages makes it easier to see at a glance what code has been affected by recent changes. It also makes it easier to search through our commit history.

To get some background, please read [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)

## General guidelines

Note: These are recommendations to strive for, not hard requirements. Each case is different and if you have a good reason to break a guideline below, you probably should.

1. Separate subject from body with a blank line
2. Limit the subject line to 50 characters
3. Capitalize the subject line
4. Do not end the subject line with a period
5. Use the imperative mood in the subject line (See examples below)
6. Use the body to explain what and why instead of how

## Subject line

The subject line should be concise and easy to visually scan in a list of commits, giving context around what code has changed.

It should be prefixed by the the area of code that was affected, eg `web:`, `cmd/searcher:`

### Imperative mood

The subject should always be able to complete the sentence: `This commit will`

Prefer "Fix bug in XYZ" over "Fixed a bug in XYZ"

Prefer "Change behavior of X" over "Changing behavior of X"

## Body

TBD

## Metadata

### RFCs

Links to any related RFCs should be included at the end of the commit, one per line.

### GitHub issues

Links to any related GitHub issues should appear at the end of the commit message, one per line.

## Enforcing rules

We currently do not enforce any of the above, because a majority of the guidelines above are not strict requirements.
