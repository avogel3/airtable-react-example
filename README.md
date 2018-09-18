Airtable and React Example
===

This repo is meant to be used as an example for using the [Airtable.js](https://github.com/Airtable/airtable.js) library. In this example, I have used the [Agile Workflow Project Template](https://airtable.com/templates/product-design-and-ux/exps29rjSzaWD5UD7/agile-workflow) in a custom workspace. 

# Setup

### Prequisites
  * **Airtable account and API Key**: [Airtable Account Page](https://airtable.com/account).
  * **Agile Workflow Project Template in your Airtable workspace**: [Agile Workflow Project Template](https://airtable.com/templates/product-design-and-ux/exps29rjSzaWD5UD7/agile-workflow)
  * **Base ID for the Agile Workflow Project Template**: [Available in the API docs for your bases](https://airtable.com/api)

### Environment Variables

Create a development env: 

```shell
cp .env.example .env.development
```

Then set the Airtable API key and the Base ID in `.env.development`

### Running the Server

```shell
yarn start
```


##### Andrew Vogel
##### Generated with Create React App
