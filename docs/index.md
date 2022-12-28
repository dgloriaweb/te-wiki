# Talentexploit Wiki

>The goal of this project is to give the user an insight of their career opportunities based on their experience, skills, but not excluding their hobbies, childhood dreams, even talents, that they dismissed as career path, because they didn't think that provides them the necessary income or level of life.
Parents often break down the enterpreneur in their childres, afraid of not being able to pay the bills, however at a certain age we all recognize that if we love what we do, a little is enough. Also if someone is enthusiasted and can do their job wholeheartedly, others will recognize, and co-workers will to cooperate as well as employees/ clients willing to pay for them more.
Talentexploit will collect data about the user and use it to match to career paths, which I shorly named jobs. This is not a jobsite. Here we collect the same amount of data about career paths as the users, to match them the best. 
My long term goal is to make this a tool, where people can browse career paths, and if they have all the motives and everything, but don't have the skills, will find detailes instructions on how to start that path, what education is required and how much time and money is required until they can be successful.

Disclaimer: I never had practice in adult education, wasn't attending to any high level education, all I have is skills to code, a HR generalist certification and a will to make this world a better place by providing people a tool to find a career, where they can thrive and be useful for their community. -dgloria

## Dashboard / welcome page
**Todo** Handle the case that some jobs can be done both remote and from office Jira: [TAL-420](https://talentexploit.atlassian.net/browse/TAL-420)

### Header
Contains the logo, the link to [docs](https://talentexploit-wiki.netlify.app#docs) and the user management buttons

#### Docs
Created with [vitepress](https://vitepress.vuejs.org/), &copy;Dec 2022. Keep it updated 

#### My Account (login, logout, register)


### Main content
This page is finished.

#### Section 1 - Results
Lists out the top ten jobs that match based on the user's settings in work preferences and skills.
All jobs have the same as users: work preferences and skills. These aren't just matched, they are also weighted. If a user prefers working from home, then the jobs that are require workplace work, aren't as relevant as jobs that can be done remotely. Similarly some other settings are weighted, but I can't remember what's the method. This can be revisited in the future.

##### Navigation buttons
Currently these are here, but these could go somewhere later, based on some logic.

*See all button* This takes to the /matchRates page. There's a logical error here.
*Add job button* This takes to the addJob page, which is more or less a copy of the edit jobs page.

#### Section 2 - User's work preferences
In this section the user sets up their preferences that will determine which jobs will be offered. 
Some settings are permitted, some are restricted. For example if one wants to work out of workdays only, then the system won't allow them to set any other options. 

## Match rates (All job rates)
Lists out all the jobs so the user has the option to browse among those which aren't shown on the top 10. Eventually the list of jobs on the main page will show all jobs that have more than 90% match, but the user might want to explore other opportunities as well, or see their rates to some jobs they are interested in. 

By clicking on the job, the /jobs/$id page is targeted.

## Skills
**Todo** Add some kind of filtering to the skills list Jira: [TAL-393](https://talentexploit.atlassian.net/browse/TAL-393)

**Todo** Add driving

**Todo** Rename driving to drivers Jira: [TAL-167](https://talentexploit.atlassian.net/browse/TAL-167)

## Jobs
**Todo** Make job related skills editable Jira: [TAL-399](https://talentexploit.atlassian.net/browse/TAL-399)

**Todo** record user actions on jobs Jira: [TAL-268](https://talentexploit.atlassian.net/browse/TAL-268)

### Show job
URL: ```/jobs/{$id}/```

*Edit button* Opens /jobs/$id/edit page. Here currently only the work preferences can be edited.

**Todo** Pull all job pages under one umbrella, including show job, edit job and add job. Kinda manage jobs page. Maybe add a sidebar for admins that has all these grouped under manage jobs, and wherever you come from, it shows where you currently are. Name the pages accordingly. 

**Todo** Add a back button to go to the main page 

**Todo** Add a loading button while the api request runs Jira: [TAL-431](https://talentexploit.atlassian.net/browse/TAL-431)

### Edit job
URL: ```/jobs/{$id}/edit```


### Add job
URL: ```/addJob```


### Adding and editing similar jobs
**Todo:** Manipulate similar jobs, keep it dynamic while the list of jobs changes

This is a complex problem. Finding similar jobs requires a thorough search in the whole job database for jobs that requires very similar skillset. The best would be to do it automatically, but offering jobs the same way we offer skills would be another way. Also we need to avoid duplicates when entering jobs, and since we want to automate the job entry, the app should be able to offer similar jobs during setting up a job and make sure these aren’t exactly the same. Maybe should consider similar job titles as group and not individual job. Not sure that this should be implemented at this point.

Jira: [TAL-435](https://talentexploit.atlassian.net/browse/TAL-435) (later will be devided into smaller jobs)

## Driving licenses
**Todo** Implement 

## Users
**Todo** delete/disable use Jira: [TAL-370](https://talentexploit.atlassian.net/browse/TAL-370)

**Todo** email confirmation Jira: [TAL-329](https://talentexploit.atlassian.net/browse/TAL-329)

**Todo** reset password Jira: [TAL-305](https://talentexploit.atlassian.net/browse/TAL-305)

**Todo** send email to admin if user registers or logs in Jira: [TAL-299](https://talentexploit.atlassian.net/browse/TAL-299)

**Todo** setup admins Jira: [TAL-293](https://talentexploit.atlassian.net/browse/TAL-293)

**Todo** delete a user if it's inactive Jira: [TAL-182](https://talentexploit.atlassian.net/browse/TAL-182)
