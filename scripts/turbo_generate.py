#!/usr/bin/env python3
"""Compatibility entry point. Bulk generation and publication are disabled."""
from radar import main
if __name__ == '__main__':
    raise SystemExit(main())
