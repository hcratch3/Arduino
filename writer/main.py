import sys
from pyscript import display

import subprocess

subprocess.run(['ls', '-al'])

command = 'ls -al'
ret = subprocess.run(command, shell=True)
print(ret)

display(sys.version)