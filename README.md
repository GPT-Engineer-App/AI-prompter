# AI-prompter

Objective:
Create a "Prompt Generator" tool that helps users write effective prompts for an AI model to complete various tasks. The tool should generate a prompt template based on the user's task description and allow the user to provide values for variables in the template.
Instructions:

Set up the environment:

Install the necessary libraries for interacting with the AI model's API
Import required modules for string manipulation and regular expressions
Set up authentication with the AI model's API and initialize the client


Create a "metaprompt" that will guide the AI model in generating effective prompt templates:

Write a long, multi-shot prompt that includes several examples of well-structured prompts for various tasks
Each example should demonstrate best practices for prompt engineering, such as providing clear instructions, using input variables, and specifying desired outputs


Implement the user interface for the Prompt Generator:

Prompt the user to enter their task description
Allow the user to optionally provide a list of input variables they want to use in the prompt template
Insert the user's task description into the metaprompt


Generate the prompt template:

Send the metaprompt with the user's task to the AI model
Extract the generated prompt template and variables from the AI model's response using string manipulation and regular expressions


Refine the prompt template:

Check for any "free-floating variables" (variables used outside of XML tags) in the prompt template
If any are found, send the prompt template back to the AI model with instructions to remove or fix the inapt variable usage


Populate the prompt template with user-provided values:

Prompt the user to enter values for each variable in the prompt template
Substitute the user's values into the template


Generate the final output:

Send the populated prompt template to the AI model for completion
Display the AI model's output to the user



Pseudocode:
Copy code# Set up environment
install_libraries()
import_modules()
set_up_authentication()
initialize_client()

# Create metaprompt
metaprompt = """
[Multi-shot prompt with examples of effective prompts]
"""

# User interface
task_description = get_user_input("Enter task description")
input_variables = get_user_input("Enter input variables (optional)")
metaprompt_with_task = insert_task_into_metaprompt(task_description, metaprompt)

# Generate prompt template
ai_response = send_to_ai_model(metaprompt_with_task)
prompt_template, variables = extract_template_and_variables(ai_response)

# Refine prompt template
while free_floating_variables_exist(prompt_template):
    ai_response = send_to_ai_model(prompt_template, fix_free_floating_variables=True)
    prompt_template = extract_template(ai_response)

# Populate prompt template
for variable in variables:
    value = get_user_input(f"Enter value for {variable}")
    prompt_template = substitute_value(prompt_template, variable, value)

# Generate final output
final_output = send_to_ai_model(prompt_template)
display_output(final_output)
Additional Resources:

Documentation for the AI model's API and libraries
Tutorials on string manipulation and regular expressions in Python
Examples of effective prompt engineering techniques and best practices
Case studies of successful applications of prompt engineering in various domains

By following these instructions and referring to the provided pseudocode and resources, you should be able to recreate the functionality of the Prompt Generator tool. Remember to break down the problem into smaller steps, test your code incrementally, and iterate on your solution as needed.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/AI-prompter.git
cd AI-prompter
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
