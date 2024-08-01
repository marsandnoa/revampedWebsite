# Backend/run.py
import sys
import os

# Add the project directory to the sys.path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), 'pythonapp')))

from pythonapp import create_app

app = create_app()

if __name__ == '__main__':
    app.run(debug=True)
