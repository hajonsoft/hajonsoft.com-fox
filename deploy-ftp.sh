#!/usr/bin/env bash
set -euo pipefail

# Required environment variables:
# FTP_HOST, FTP_USER, FTP_PASS
# Optional environment variables:
# FTP_REMOTE_DIR (default: /public_html/)
# FTP_LOCAL_DIR (default: ./build/)

if ! command -v lftp >/dev/null 2>&1; then
  echo "Error: lftp is not installed. Install it with: brew install lftp"
  exit 1
fi

FTP_HOST="hajonsoft.net"
FTP_USER="ftp@hajonsoft.net"
FTP_PASS=""
FTP_REMOTE_DIR="${FTP_REMOTE_DIR:-/public_html/}"
FTP_LOCAL_DIR="${FTP_LOCAL_DIR:-./build/}"

if [[ -z "$FTP_HOST" || -z "$FTP_USER" || -z "$FTP_PASS" ]]; then
  echo "Error: Missing required environment variables."
  echo "Set FTP_HOST, FTP_USER, FTP_PASS before running this script."
  exit 1
fi

if [[ ! -d "$FTP_LOCAL_DIR" ]]; then
  echo "Error: Local build directory not found at $FTP_LOCAL_DIR"
  echo "Run: npm run build"
  exit 1
fi

echo "Starting FTP deploy..."
echo "Host: $FTP_HOST"
echo "Remote dir: $FTP_REMOTE_DIR"
echo "Local dir: $FTP_LOCAL_DIR"

lftp -e "
set ftp:passive-mode true;
set ftp:ssl-allow true;
set ssl:verify-certificate no;
open -u $FTP_USER,$FTP_PASS $FTP_HOST;
mirror -R --delete --verbose $FTP_LOCAL_DIR $FTP_REMOTE_DIR;
bye
"

echo "Deploy completed successfully."
