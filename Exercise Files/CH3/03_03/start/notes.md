#Steps to move
0. Create a repo and a CI/CD connection with Travis, Jenkins or any other so as you add new things you get early warnings of issues
1. create a new project with the latest version of Angular
2. then for each component would create a component using the angular tool
3. then move your code (components, modules, services, etc) from the old app to the new one -> start with the components, one at a time, test each one
4. if any errors come up around needing unmoved yet external dependencies add static code with a TODO mention, come back to it when the service/external dependency is moved.
5. repeat until all your code from the *src* has been moved
6. check if there were any static assets, specific packages in package.json required (in the original project) and configs in the tsconfig, testing files, etc.