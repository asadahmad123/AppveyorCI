$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("todo.feature");
formatter.feature({
  "line": 1,
  "name": "Add new item to ToDO list",
  "description": "",
  "id": "add-new-item-to-todo-list",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Lambdatest ToDO Scenario",
  "description": "",
  "id": "add-new-item-to-todo-list;lambdatest-todo-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is on home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "select First Item",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "select second item",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "add new item",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "verify added item",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Update the result",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "ToDoStepDefinition.user_already_on_home_page()"
});
formatter.result({
  "duration": 597138652,
  "error_message": "java.lang.Error: Unresolved compilation problems: \n\tConfiguration cannot be resolved\n\tConfiguration cannot be resolved\n\tConfiguration cannot be resolved\n\tConfiguration cannot be resolved\n\tConfiguration cannot be resolved\n\tConfiguration cannot be resolved\n\n\tat stepDefinitions.ToDoStepDefinition.user_already_on_home_page(ToDoStepDefinition.java:24)\n\tat ✽.Given user is on home Page(todo.feature:5)\n",
  "status": "failed"
});
formatter.match({
  "location": "ToDoStepDefinition.select_first_item()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ToDoStepDefinition.select_second_item()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ToDoStepDefinition.add_new_item()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ToDoStepDefinition.verify_added_item()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ToDoStepDefinition.update_result()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ToDoStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});