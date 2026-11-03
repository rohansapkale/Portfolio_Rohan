#!/usr/bin/env bash
# Start Rohan's Portfolio App & Ops Desk Unified Server

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR" || exit 1

# Kill any existing processes on port 8085
fuser -k 8085/tcp 2>/dev/null
sleep 1

# Start Unified Production Server on Port 8085 in background
echo "Starting Rohan Sapkale Portfolio & Ops Console on port 8085..."
setsid /home/frappe/frappe-bench-v16/env/bin/python unified_server.py > /tmp/rohan_portfolio.log 2>&1 &
disown

sleep 1
if fuser 8085/tcp >/dev/null 2>&1; then
    echo "=============================================================="
    echo "🚀 Rohan Sapkale Portfolio & Ops Console is LIVE on port 8085!"
    echo "Public URL:   http://157.15.203.96:8085"
    echo "Local URL:    http://localhost:8085"
    echo "Owner PIN:    rohan2026"
    echo "Log file:     /tmp/rohan_portfolio.log"
    echo "=============================================================="
else
    echo "Error: Server failed to bind to port 8085. Check /tmp/rohan_portfolio.log"
fi
