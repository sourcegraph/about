#!/bin/bash
set -euo pipefail

friendly_size() {
  local bytes=$(stat --format="%s" "$1" 2>/dev/null || stat -f "%z" "$1")
  local size

  if (( bytes < 1024 )); then
    size="${bytes} B"
  elif (( bytes < 1048576 )); then
    size=$(awk "BEGIN { printf \"%.2f KB\", $bytes / 1024 }")
  else
    size=$(awk "BEGIN { printf \"%.2f MB\", $bytes / 1048576 }")
  fi

  echo "$size"
}

max_size=$((750 * 1024))  # 750kB in bytes
failed_count=0

# We ignore all these files, because we wanted to introduce this linter to
# prevent future badness without having to fix what's there first
old_files=(
  public/home/branded-icons/code-search-icon.svg
  public/home/branded-icons/Code-Search-squircle.svg
  public/home/mobile-cody-homepage-illustration.svg
  public/home/screens/explain code.svg
  public/home/screens/find reusable implementations.svg
  public/home/screens/find regressions.svg
  public/home/screens/automate toilsome tasks.svg
  public/home/vs-code-logo.svg
  public/app/batch-changes.svg
  public/enterprise/screenshot.svg
  public/enterprise/logo-tiles/vscode-light.svg
  public/enterprise/logo-tiles/go-dark.svg
  public/enterprise/logo-tiles/gerritt-dark.svg
  public/enterprise/logo-tiles/intellij-dark.svg
  public/enterprise/logo-tiles/go-light.svg
  public/enterprise/logo-tiles/vscode-dark.svg
  public/enterprise/logo-tiles/gerritt-light.svg
  public/security/soc2.svg
  public/testimonies/bryce-kalow-2.svg
  public/testimonies/ronnie-magatti.svg
  public/testimonies/justin-phillip.svg
  public/resources/cody-context-architecture-whitepaper.svg
  public/resources/ai-platform-cody-whitepaper.svg
  public/solutions/build-unit-tests/generating-unit-test.svg
  public/solutions/gitlab/ai-cody-mobile.svg
  public/solutions/gitlab/code-search-mobile.svg
  public/solutions/gitlab/code-search.svg
  public/solutions/bitbucket/code-search.svg
  public/cody/define-custom-command.svg
  public/cody/generate-unit-tests.svg
  public/cody/describe-code-smell.svg
  public/cody/explain-code.svg
  public/code-search/code-hosts/gerrit.svg
  public/case-studies/nine-logo.svg
  public/product-diagram-0.svg
  public/icons/vscode.svg
  public/community/github-sponsors-mona.svg
  public/external-logos/insidebigdata-logo.svg
  public/external-logos/indeed-logo.svg
  public/external-logos/tsconf-eu-logo.svg
  public/external-logos/eweek-logo.svg
  public/external-logos/silicon-angle-logo.svg
  public/external-logos/finsmes-logo.svg
  public/external-logos/github-horizontal-logo.svg
  public/external-logos/toast-logo.svg
  public/external-logos/lunar.svg
  public/external-logos/spring-venture-group.svg
  public/external-logos/trifacta-logo.svg
  public/external-logos/tsconf-js-logo.svg
  public/external-logos/review-board-logo.svg
  public/external-logos/auera-logo.svg
  public/external-logos/rxjs-live-london-logo.svg
  public/external-logos/handy-logo.svg
  public/external-logos/nubank-logo.svg
  public/external-logos/the-new-stack-sq-logo.svg
  public/assets/resources/reportMockup.svg
  public/assets/cody/ide-sidebar.svg
  public/assets/cody/new_context_illustration_details_light.svg
  public/assets/cody/placeholder-chat.svg
  public/assets/cody/new_context_illustration_details.svg
  public/assets/cody/quin-avatar-icon.svg
  public/assets/cody/code-graph-mobile-light.svg
  public/assets/cody/ide-toolbar.svg
  public/assets/cody/ide-vector.svg
  public/assets/aws/workiva.svg
  public/assets/cody/syntax-highlighter-bg.svg
  public/resources/forrester-whitepaper.svg
)

echo "🔎 Checking for embedded base64 encoded pngs..."

while IFS= read -r svg_file; do
  # Check if the SVG mistakenly embeds a PNG file
  if grep -q 'data:image/png;base64' "$svg_file"; then
    if [[ " ${old_files[*]} " == *" $svg_file "* ]]; then
      echo "Ignoring old file: $svg_file - contains base64 encoded png">&2
      continue
    fi

    echo "🖼️  $svg_file - contains base64 encoded png">&2
    ((failed_count++))
  fi
done < <(find "public" -type f -name '*.svg')


echo
echo "🔎 Checking for files that are too large..."

while IFS= read -r svg_file; do
  # Check if the file size exceeds 1MB
  file_size=$(stat -f %z "$svg_file")	
  if (( file_size > max_size )); then
    if [[ " ${old_files[*]} " == *" $svg_file "* ]]; then
      echo "Ignoring old file: $svg_file - $(friendly_size "$svg_file") larger than 750KB">&2
      continue
    fi

    echo "🪝 $svg_file - $(friendly_size "$svg_file") larger than 750KB">&2
    ((failed_count++))
  fi
done < <(find "public" -type f -name '*.svg')


echo
if (( failed_count > 0 )); then
  echo "❌ $failed_count failures"
  exit 1
else
  echo "💃 All checks passed"
fi
