# 0x05. React inline styling

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2019/12/a34a82f55aae6efeeb53.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220606%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220606T184709Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=344369a1848492aba99c7030d2853b2b3e95d3151fa9c0807c92b062eb7544f5)

## Resources

**Read or watch**:

- [Aphrodite](https://intranet.hbtn.io/rltoken/QXlvi2PsWUQpEfhhqTGcAw 'Aphrodite')
- [Inline styling](https://intranet.hbtn.io/rltoken/yYqY0lZLc3KmAm5MV_MdDw 'Inline styling')
- [Enzyme Render](https://intranet.hbtn.io/rltoken/k7feyV9bL8NrNRK_5rNi1g 'Enzyme Render')
- [Enzyme Prop](https://intranet.hbtn.io/rltoken/yueQrkqySHKZhHWi9Myk9g 'Enzyme Prop')
- [CSS Viewport](https://intranet.hbtn.io/rltoken/1C41qQn9OTYCT9DoR871fg 'CSS Viewport')
- [CSS Media queries](https://intranet.hbtn.io/rltoken/2-7F2wNcG7sZWzVR_M6iBw 'CSS Media queries')
- [CSS Animations](https://intranet.hbtn.io/rltoken/Pzvyl9EJyrWkreFvMArwCg 'CSS Animations')

## Learning Objectives

At the end of this project, you are expected to be able to [explain to anyone](https://intranet.hbtn.io/rltoken/tygP123RYJk_Sq3Ye9IfKQ 'explain to anyone'), **without the help of Google**:

- the differences between using a CSS file and inline styling
- how to use a CSS-in-JS tool like Aphrodite
- how to use conditions within JS to apply different styles
- how to use responsive design and make the application show a different UI according to the screen size
- how to create small animations within the app

## Requirements

- All your files will be interpreted/compiled on Ubuntu 18.04 LTS using `node 12.x.x` and `npm 6.x.x`
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All your files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory

## Tasks

### 0. Inline styling

mandatory

Score: 0.00% (Checks completed: 0.00%)

- Copy over the `task_5` directory from the `0x04. React components` project (We’ll be using it as the base for this project)
- Rename the `task_5` directory to `task_0`

**Modify the `CourseListRow` component in `task_0/dashboard/src/CourseList/CourseListRow.js`:**

- Using inline styling, change the background color of a row to `#f5f5f5ab`
- Using inline styling, change the background color of a header row to `#deb5b545`
- If needed, modify the test file so every test pass

**Tips:**

- For better performances, never create and pass an object to an element directly. Use a constant instead
- Use the `isHeader` prop to easily pick the style you want to apply to the `tr` tag

**Requirement:**

- Even if the modification is small, make sure that your test suites are still passing. Especially the file `CourseListRow.test.js`

**Repo:**

- GitHub repository: `holbertonschool-web_react`
- Directory: `0x05-React_inline_styling`
- File: `task_0/dashboard/src/CourseList/CourseListRow.js, task_0/dashboard/src/CourseList/CourseListRow.test.js`

Done? Help Check your code QA Review

### 1. install Aphrodite

mandatory

Score: 0.00% (Checks completed: 0.00%)

Install Aphrodite using npm with:

`npm install --save aphrodite`

**Modify the `App` component in `task_1/dashboard/src/App/App.js`:**

- Modify the component to use Aphrodite within the js file
- Define the styling for the body and the footer within the file
- Delete the file `App.css` and the import

**Modify the `BodySectionWithMarginBottom` component in `task_1/dashboard/src/BodySection/BodySectionWithMarginBottom.js`:**

- Modify the component to use Aphrodite within the js file
- Define the styling for the margin within the file
- Delete the file `BodySection.css` and the import

**Modify the `CourseList` component in `task_1/dashboard/src/CourseList/CourseList.js`:**

- Modify the component to use Aphrodite within the js file
- Define the styling for the list within the file
- Remove the styling for the list within the `CourseList.css` file

**Modify the `Header` component in `task_1/dashboard/src/Header/Header.js`:**

- Modify the component to use Aphrodite within the js file
- Define the styling for the logo and the header within the file
- Delete the file `Header.css` and the import

**Modify the `Login` component in `task_1/dashboard/src/Login/Login.js`:**

- Modify the component to use Aphrodite within the js file
- Define the styling for the margin within the file
- Delete the file `Login.css` and the import

**Modify the `Notifications` component in `task_1/dashboard/src/Notifications/Notifications.js`:**

- Modify the component to use Aphrodite within the js file
- Define the styling for the notifications panel within the file
- Remove the styling for the notifications panel from the `Notifications.css`

**Make sure the test suites are still passing!**

**Tips:**

- Look into using `StyleSheetTestUtils.suppressStyleInjection` at the top of your test file, to prevent issues with style injections

**Requirements:**

- At this point, the UI should look exactly the same with the inline styling as it was with the CSS files

**Repo:**

- GitHub repository: `holbertonschool-web_react`
- Directory: `0x05-React_inline_styling`
- File: `task_1/dashboard/src/App/App.js, task_1/dashboard/src/BodySection/BodySectionWithMarginBottom.js, task_1/dashboard/src/CourseList/CourseList.js, task_1/dashboard/src/Header/Header.js, task_1/dashboard/src/Login/Login.js, task_1/dashboard/src/Notifications/Notifications.js, task_1/dashboard/src/App/App.test.js,task_1/dashboard/src/BodySection/BodySectionWithMarginBottom.test.js, task_1/dashboard/src/CourseList/CourseList.test.js, task_1/dashboard/src/Header/Header.test.js, task_1/dashboard/src/Login/Login.test.js, task_1/dashboard/src/Notifications/Notifications.test.js`

Done? Help Check your code QA Review

### 2. Conditionally applying style

mandatory

Score: 0.00% (Checks completed: 0.00%)

**Modify the `NotificationItem` component in `task_2/dashboard/src/Notifications/NotificationItem.js`:**

- Modify the component to use Aphrodite within the js file
- Define the styling for the urgent and default items
- Using condition, apply the styling to the `li` element
- Delete the `Notifications.css` file and remove any import

**Modify the `NotificationItem.test` suite in `task_2/dashboard/src/Notifications/NotificationItem.test.js`:**

- Make sure that tests are still passing

**Modify the `CourseListRow` component in `task_2/dashboard/src/CourseList/CourseListRow.js`:**

- Modify the component to use Aphrodite within the js file
- Define the styling for the different type of rows (default rows, header rows)
- Define the styling for the different type of `th` elements
- Delete the `CourseList.css` file and remove any import

**Modify the `CourseListRow.test` suite in `task_2/dashboard/src/CourseList/CourseListRow.test.js`:**

- Make sure that tests are still passing
- Test properties one by one if easier

**Requirements:**

- Use conditions as much as you can, do not repeat elements
- At this point, the UI should look exactly the same with the inline styling as it was with the CSS files

**Tips:**

- You can either use conditions or use an array to apply the different styling. Conditions are usually more robust
- Testing might become difficult with the different variations. Look into the Enzyme documentation for `render`, `contains`, `prop`, and `html`

**Repo:**

- GitHub repository: `holbertonschool-web_react`
- Directory: `0x05-React_inline_styling`
- File: `task_2/dashboard/src/Notifications/NotificationItem.js, task_2/dashboard/src/Notifications/NotificationItem.test.js, task_2/dashboard/src/CourseList/CourseListRow.js, task_2/dashboard/src/CourseList/CourseListRow.test.js`

Done? Help Check your code QA Review

### 3. Responsive design

mandatory

Let’s make the application responsive to the screen size using media queries. We are going to only focus on large screen and screens with a width under 900px

**Modify the component `Login` in `task_3/dashboard/src/Login/Login.js`:**

- Make sure that a label and an input are on each line
- Make sure that the button is on a new line
- The screen should look like the image below:

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2019/12/c3ed54e1dba4b232adc1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220606%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220606T184709Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=cd9bc675f84aaf47c3813d6535512214753f8e266c39c6c043eabc5d095a4785)

**Modify the component `Notifications` in `task_3/dashboard/src/Notifications/Notifications.js`:**

- When the panel is open, it should take over the entire screen
- There should be no padding because of the `ul` element
- The font size of the text should be 20px

**Modify the component `NotificationItem` in `task_3/dashboard/src/Notifications/NotificationItem.js`:**

- The item should take the entire screen width
- A black border should be displayed at the bottom
- The font size of the text should be 20px
- The padding for the item should be `10px 8px`

**Requirements:**

- When the notifications panel is open, the screen should look like the image below:

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2019/12/e0d15ee8d2e28be1e130.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220606%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220606T184709Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=acedfc35e6e791f7eccdeafacc073474bca98e057766ef6a2cd09c5f0a4dfa5c)

**Repo:**

- GitHub repository: `holbertonschool-web_react`
- Directory: `0x05-React_inline_styling`
- File: `task_3/dashboard/src/Login/Login.js, task_3/dashboard/src/Notifications/Notifications.js, task_3/dashboard/src/Notifications/NotificationItem.js`

Done? Help QA Review

### 4. Animation

mandatory

Let’s create an animation that we can display when the user hovers on the `Notifications` menu or when there is a new notification. In `task_4/dashboard/Notifications/Notifications.js`:

- Create one object containing the CSS frames to make the opacity change from `0.5` to `1`
- Create one object containing the CSS frames to make the element bounce. You can play with translateY and alternate from 0px to -5px and 5px

Modify the styling for the menu item to:

- Float on the right of the screen over every element
- The background color should be `#fff8f8`
- Show the pointer cursor when hovering the element
- On hover, animate the element with the two new animations. The duration for the opacity change should be 1s, and the duration for the bouncing effect should be 0.5s. The animation should repeat 3 times only
- When the list of notifications is visible, hide the menu item

**Requirements:**

- When the notifications panel is hovered or opened, the UI should look like the image below:

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2019/12/8d302a65b1be36662c54.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220606%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220606T184709Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=7dc8d40d5dde3610df96300cea67c05d7d11da01323172d0ce904d8ce186c732)

**Repo:**

- GitHub repository: `holbertonschool-web_react`
- Directory: `0x05-React_inline_styling`
- File: `task_4/dashboard/src/Notifications/Notifications.js`
