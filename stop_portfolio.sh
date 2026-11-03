#!/usr/bin/env bash
# Stop Rohan's Portfolio App & Ops Desk Server

echo "Stopping portfolio server on port 8085..."
fuser -k 8085/tcp 2>/dev/null
echo "Portfolio server stopped."
