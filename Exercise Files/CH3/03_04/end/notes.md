#Steps to move
0. Create a repo and a CI/CD connection with Travis, Jenkins or any other so as you add new things you get early warnings of issues
1. create a new project with the latest version of Angular
2. then for each component would create a component using the angular tool
3. then move your code (components, external dependencies) from the old app to the new one -> start with the components, one at a time, test each one. React to Angular isn't a straight copy, you need to maintain Angular's syntax, yet transfer the components HTML/CSS to the template and then check for any external data dependencies. 
4. if any errors come up around needing unmoved yet external dependencies add static code with a TODO mention, come back to it when the service/external dependency is moved.
5. a big difference in between React and Angular is that Angular has a lot of tools within its framework (ex.: routing) VS React where you need to add these external dependencies...so many might not be needed
6. repeat until all your code from the *src* has been moved
7. check if there were any static assets, specific packages in package.json required (in the original project) and configs in the tsconfig, testing files, etc.