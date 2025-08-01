#!/usr/bin/env python3
"""
Simple HTTP server to preview the portfolio website locally.
Run: python3 server.py
Then open: http://localhost:8000
"""

import http.server
import socketserver
import webbrowser
import os

PORT = 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def main():
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        print(f"🚀 Portfolio server running at http://localhost:{PORT}")
        print("📁 Serving files from:", os.getcwd())
        print("🌐 Opening browser...")
        print("⚡ Press Ctrl+C to stop the server")
        
        # Automatically open browser
        webbrowser.open(f'http://localhost:{PORT}')
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n👋 Server stopped.")

if __name__ == "__main__":
    main()
