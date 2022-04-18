(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[56],{3925:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/revent-docs/backend",function(){return r(8176)}])},250:function(e,n,r){"use strict";var s=r(5893);n.Z={github:"https://github.com/runtimerevolution/revent-docs",docsRepositoryBase:"https://github.com/runtimerevolution/revent-docs",titleSuffix:" - Revent Docs",nextLinks:!0,prevLinks:!0,darkMode:!0,search:!0,footer:!0,footerText:"Runtime Revolution Photo Contest ".concat((new Date).getFullYear()),logo:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("svg",{children:"..."}),(0,s.jsx)("span",{children:"Revent Docs"})]}),head:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,s.jsx)("meta",{name:"description",content:"Revent: How did we build this project"}),(0,s.jsx)("meta",{name:"og:title",content:"Revent: your best Runtime Event"})]})}},8176:function(e,n,r){"use strict";r.r(n);var s=r(5893),i=r(7829),o=r.n(i),l=r(3805),a=r(250),t=(r(5675),function(e){return(0,l.withSSG)(o()({filename:"backend.mdx",route:"/revent-docs/backend",meta:{},pageMap:[{name:"index",route:"/"},{name:"meta.json",meta:{index:"Introduction","revent-docs":"Revent Docs"}},{name:"revent-docs",children:[{name:"backend",route:"/revent-docs/backend"},{name:"frontend",route:"/revent-docs/frontend"},{name:"index",route:"/revent-docs"},{name:"meta.json",meta:{index:"Revent",backend:"API",frontend:"Next"}}],route:"/revent-docs"}]},a.Z))(e)});n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=function(){var n=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",a:"a",ol:"ol",pre:"pre",code:"code",em:"em",br:"br",strong:"strong"},e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{children:"Welcome to the revent-api creation!"}),"\n",(0,s.jsx)(n.p,{children:"This docs will help you start your own python project with pyenv, poetry, docker and deploying this to heroku just like we did the first time."}),"\n",(0,s.jsx)(n.p,{children:"Tools we are gonna use:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/pyenv/pyenv",children:"Pyenv"})," - To manage and set your python version"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://python-poetry.org/docs/#installation",children:"Poetry"})," - To manage packages, dependency management"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://direnv.net/docs/installation.html",children:"Direnv"})," - To manage our virtual environment automatically"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://docs.docker.com/get-docker/",children:"Docker"})," - To create an image of your local setup and be able to run this anywhere"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"In order to be more practical, the individual installation of each tool and integration with the environment will have to be done by you via the links above."}),"\n",(0,s.jsx)(n.p,{children:"Now that we have all the tools installed, let's follow the steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Create your repository"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Clone the repository to your local workplace (we should have a .gitignore file and a README.md file)"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Install your python version using the terminal:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pyenv install <version>\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Move to the project folder and create your first file (that dictates which version of python to use) by running:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pyenv local <version>\n"})}),"\n",(0,s.jsx)(n.p,{children:"We have a new file now (.python-version) that will tell the version needed to run the app."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Now we need to setup poetry so we can install packages, run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"poetry init\n"})}),"\n",(0,s.jsxs)(n.p,{children:["We can just ",(0,s.jsx)(n.em,{children:"press Enter all the way"})," and configure things later.",(0,s.jsx)(n.br,{}),"\n","Now we have a new file(pyproject.toml) which will tell us what the app's dependencies are (for now just python)."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Poetry also has a great feature, he creates a new virtual environment (if you don't have one) that we are gonna ignore for now:"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Start by installing the current dependencies:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"poetry install\n"})}),"\n",(0,s.jsx)(n.p,{children:"Your current project now has a new file called poetry.lock with the installed dependencies and respective versions."}),"\n",(0,s.jsx)(n.p,{children:"But we don't wanna have to activate this virtual environment everytime we come to work in the project, instead we are gonna use direnv!"}),"\n",(0,s.jsxs)(n.ol,{start:"7",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Since you already have direnv installed and hooked into your shell, start by creating a .envrc file with the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"layout pyenv <version>\n"})}),"\n",(0,s.jsxs)(n.p,{children:['Just change the "version" to your python version. Everytime you change .envrc file you will have to allow this change with ',(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"direnv allow"})})]}),"\n",(0,s.jsx)(n.p,{children:"Through the terminal, leave the project folder and come back in to see your new virtual environment."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"To set your interpreter to use this new path, run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"poetry env info --path\n"})}),"\n",(0,s.jsx)(n.p,{children:"Copy this path, add in the end of it /bin/python and if your are using vscode, go to settings and search for python interpreter.\nNow select to use a specific path and use the one you just copy. Press Enter and you'r done! Now vscode will use this one."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Add .envrc and .direnv to your .gitignore file"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Install the packages:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"poetry add Django\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"poetry add strawberry-graphql\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"poetry add isort\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"poetry add gunicorn\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"poetry add django-environ\n"})}),"\n",(0,s.jsx)(n.p,{children:"And so on... notice that the last package we installed is one that will allow us to use .env files to hide our secrets!"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Create the django app:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"django-admin startproject <name_of_project> .\n"})}),"\n",(0,s.jsx)(n.p,{children:"You shuld now have a folder with the name you choosed and a manage.py at the same level of other configuration files we created so far."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Create your .env file and place your SECRET_KEY from project settings in there using ",(0,s.jsx)(n.a,{href:"https://django-environ.readthedocs.io/en/latest/",children:"django-environ"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"On settings.py:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import environ\nimport os\nenv = environ.Env()\nBASE_DIR = Path(__file__).resolve().parent.parent\nenviron.Env.read_env(os.path.join(BASE_DIR, '.env'))\nSECRET_KEY = env('SECRET_KEY')\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"On your .env file you just save the same value you had on settings:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"SECRET_KEY='django-insecure-+*(rklewjnr(klwnr0a70=ju^z)6$nujmo213po12341'\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"add .env to your .gitignore file"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Start your django app"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"python manage.py startapp <name_of_app>\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Create a view on your app that looks like this:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The import:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from django.http import HttpResponse\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The method:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'def hello(request):\n  return HttpResponse("Hello Runtime")\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"On your project folder, go to urls.py and add this:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Import:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from <appname> import views\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["On urlpatterns add: ",(0,s.jsx)(n.code,{children:"path('', views.hello, name='hello')"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'Now we can run the app and see a "Hello Runtime" already!'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["On settings.py add ",(0,s.jsx)(n.code,{children:"'*'"})," to your allowed hosts."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"python manage.py runserver\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Go to your browser and check the link provided by the command above."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Create a file called Makefile and add this command plus future commands there. Check example ",(0,s.jsx)(n.a,{href:"https://makefiletutorial.com/",children:"here"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"To build a docker image of your current project, start by creating a file called 'Dockerfile' and one '.dockerignore'"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"For Dockerfile we are using this configuration:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Dockerfile",children:"# syntax=docker/dockerfile:1\nFROM python:3\n\nARG DJANGO_ENV\n\nENV DJANGO_ENV=${DJANGO_ENV} \\\n  # python:\n  PYTHONFAULTHANDLER=1 \\\n  PYTHONUNBUFFERED=1 \\\n  PYTHONHASHSEED=random \\\n  # pip:\n  PIP_NO_CACHE_DIR=off \\\n  PIP_DISABLE_PIP_VERSION_CHECK=on \\\n  PIP_DEFAULT_TIMEOUT=100 \\\n  # poetry:\n  POETRY_VERSION=1.1.13 \\\n  POETRY_VIRTUALENVS_CREATE=false \\\n  POETRY_CACHE_DIR='/var/cache/pypoetry'\n\n# System deps:\nRUN apt-get update \\\n  && apt-get install --no-install-recommends -y \\\n    bash \\\n    build-essential \\\n    curl \\\n    gettext \\\n    git \\\n    libpq-dev \\\n    wget \\\n  # Cleaning cache:\n  && apt-get autoremove -y && apt-get clean -y && rm -rf /var/lib/apt/lists/* \\\n  && pip install \"poetry==$POETRY_VERSION\" && poetry --version\n\n# set work directory\nWORKDIR /code\n\n# Copy only requirements to cache them in docker layer\nCOPY poetry.lock pyproject.toml /code/\n\n# Install dependencies:\nRUN poetry install\n\n# Creating folders, and files for a project:\nCOPY . /code\n\n# run gunicorn\nCMD gunicorn <project_name>.wsgi:application --bind 0.0.0.0:8000\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"For our .dockerignore file we use this one:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-.dockerignore",children:"*.md\n.direnv\n.envrc\n.gitignore\n\ndb.sqlite3\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Just for us to see something on the browser we will also create a file called docker-compose.yml with the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-docker-compose",children:"version: '3.9'\n\nservices:\n  web:\n    build: .\n    command: python manage.py runserver 0.0.0.0:8000\n    ports:\n      - 8000:8000\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Build the image running the docker build command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker build -t project:latest .\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Once this finishes run the docker-compose to open your web service:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker-compose up\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Now that u seen your application running through docker let's deploy our app to heroku. Start by:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Comment out docker-compose file and prepare our deploy for heroku creating a file heroku.yml with:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-heroku.yml",children:"build:\n  docker:\n    web: Dockerfile\nrun:\n  web: gunicorn <project_name>.wsgi:application --bind 0.0.0.0:$PORT\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Change the gunicorn command on dockerfile to this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dockerfile",children:"CMD gunicorn <project_name>.wsgi:application --bind 0.0.0.0:$PORT\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Add .env to .dockerignore because we can't send this environment variables to remote."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"On settings.py change DEBUG to False."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Everything is ready, create an account on heroku and install ",(0,s.jsx)(n.a,{href:"https://devcenter.heroku.com/articles/heroku-cli",children:"Heroku-CLI"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Now that we got Heroku installed, follow the next commands:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"heroku login into your account"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"heroku login\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"heroku create app (you will get a random name like limitless-atoll-51647)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"heroku create\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Add the SECRET_KEY environment variable to your app:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"heroku config:set SECRET_KEY=SOME_SECRET_VALUE -a <randomAppName>\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In your settings.py change the allowed hosts from ",(0,s.jsx)(n.code,{children:"'*'"})," to:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"'localhost', '127.0.0.1', '<randomAppName>.herokuapp.com'"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Set your app to be a cointainer:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"heroku stack:set container -a <randomAppName>\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Make your current git branch link to remote heroku"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"heroku git:remote -a <randomAppName>\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Just push it! Note: You have to make your commit first if u havent done so."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git add .\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'git commit -am "Our first deploy"\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git push heroku <ourBranchName>:main\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Alright now you have your project setup done, we did build an image for docker and deploy on heroku! Go start coding and have fun :)"}),"\n"]}),"\n"]})]})};return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(n,{})})):n()}}},function(e){e.O(0,[58,774,888,179],(function(){return n=3925,e(e.s=n);var n}));var n=e.O();_N_E=n}]);