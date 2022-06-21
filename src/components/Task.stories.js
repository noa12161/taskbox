import React from "react";

import Task from "./Task";

export default {
  component: Task,
  title: "Task",
};

const Template = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    title: "test test test test",
    state: "TASK_PINNED",
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: "TASK_ARCHIVED",
  },
};

export const test1 = Template.bind({});
test1.args = {
  task: {
    ...Default.args.task,
    title: "test1",
    state: "TASK_TEST1",
  },
};

export const test2 = Template.bind({});
test2.args = {
  task: {
    ...Default.args.task,
    title: "test2",
    state: "TASK_TEST2",
  },
};
