import{_ as e,c as t,o as a,a as i}from"./app.8b8381dc.js";const m=JSON.parse('{"title":"Talentexploit Wiki","description":"","frontmatter":{},"headers":[{"level":2,"title":"Dashboard / welcome page","slug":"dashboard-welcome-page","link":"#dashboard-welcome-page","children":[{"level":3,"title":"Header","slug":"header","link":"#header","children":[]},{"level":3,"title":"Main content","slug":"main-content","link":"#main-content","children":[]}]},{"level":2,"title":"Match rates (All job rates)","slug":"match-rates-all-job-rates","link":"#match-rates-all-job-rates","children":[]},{"level":2,"title":"Skills","slug":"skills","link":"#skills","children":[]},{"level":2,"title":"Jobs","slug":"jobs","link":"#jobs","children":[{"level":3,"title":"Adding and editing similar jobs","slug":"adding-and-editing-similar-jobs","link":"#adding-and-editing-similar-jobs","children":[]}]}],"relativePath":"index.md"}'),s={name:"index.md"},o=i('<h1 id="talentexploit-wiki" tabindex="-1">Talentexploit Wiki <a class="header-anchor" href="#talentexploit-wiki" aria-hidden="true">#</a></h1><blockquote><p>The goal of this project is to give the user an insight of their career opportunities based on their experience, skills, but not excluding their hobbies, childhood dreams, even talents, that they dismissed as career path, because they didn&#39;t think that provides them the necessary income or level of life. Parents often break down the enterpreneur in their childres, afraid of not being able to pay the bills, however at a certain age we all recognize that if we love what we do, a little is enough. Also if someone is enthusiasted and can do their job wholeheartedly, others will recognize, and co-workers will to cooperate as well as employees/ clients willing to pay for them more. Talentexploit will collect data about the user and use it to match to career paths, which I shorly named jobs. This is not a jobsite. Here we collect the same amount of data about career paths as the users, to match them the best. My long term goal is to make this a tool, where people can browse career paths, and if they have all the motives and everything, but don&#39;t have the skills, will find detailes instructions on how to start that path, what education is required and how much time and money is required until they can be successful.</p></blockquote><p>Disclaimer: I never had practice in adult education, wasn&#39;t attending to any high level education, all I have is skills to code, a HR generalist certification and a will to make this world a better place by providing people a tool to find a career, where they can thrive and be useful for their community. -dgloria</p><h2 id="dashboard-welcome-page" tabindex="-1">Dashboard / welcome page <a class="header-anchor" href="#dashboard-welcome-page" aria-hidden="true">#</a></h2><h3 id="header" tabindex="-1">Header <a class="header-anchor" href="#header" aria-hidden="true">#</a></h3><p>Contains the logo, the link to <a href="https://talentexploit-wiki.netlify.app#docs" target="_blank" rel="noreferrer">docs</a> and the user management buttons</p><h4 id="docs" tabindex="-1">Docs <a class="header-anchor" href="#docs" aria-hidden="true">#</a></h4><p>Created with <a href="https://vitepress.vuejs.org/" target="_blank" rel="noreferrer">vitepress</a>, ©Dec 2022. Keep it updated</p><h4 id="my-account-login-logout-register" tabindex="-1">My Account (login, logout, register) <a class="header-anchor" href="#my-account-login-logout-register" aria-hidden="true">#</a></h4><h3 id="main-content" tabindex="-1">Main content <a class="header-anchor" href="#main-content" aria-hidden="true">#</a></h3><p>This page is finished.</p><h4 id="section-1-results" tabindex="-1">Section 1 - Results <a class="header-anchor" href="#section-1-results" aria-hidden="true">#</a></h4><p>Lists out the top ten jobs that match based on the user&#39;s settings in work preferences and skills. All jobs have the same as users: work preferences and skills. These aren&#39;t just matched, they are also weighted. If a user prefers working from home, then the jobs that are require workplace work, aren&#39;t as relevant as jobs that can be done remotely. Similarly some other settings are weighted, but I can&#39;t remember what&#39;s the method. This can be revisited in the future.</p><h5 id="navigation-buttons" tabindex="-1">Navigation buttons <a class="header-anchor" href="#navigation-buttons" aria-hidden="true">#</a></h5><p>Currently these are here, but these could go somewhere later, based on some logic.</p><p><em>See all button</em> This takes to the /matchRates page. There&#39;s a logical error here. <em>Add job button</em> This takes to the addJob page, which is more or less a copy of the /jobs/{$id} page.</p><h4 id="section-2-user-s-work-preferences" tabindex="-1">Section 2 - User&#39;s work preferences <a class="header-anchor" href="#section-2-user-s-work-preferences" aria-hidden="true">#</a></h4><p>In this section the user sets up their preferences that will determine which jobs will be offered. Some settings are permitted, some are restricted. For example if one wants to work out of workdays only, then the system won&#39;t allow them to set any other options.</p><h2 id="match-rates-all-job-rates" tabindex="-1">Match rates (All job rates) <a class="header-anchor" href="#match-rates-all-job-rates" aria-hidden="true">#</a></h2><p>Lists out all the jobs so the user has the option to browse among those which aren&#39;t shown on the top 10. Eventually the list of jobs on the main page will show all jobs that have more than 90% match, but the user might want to explore other opportunities as well, or see their rates to some jobs they are interested in.</p><h2 id="skills" tabindex="-1">Skills <a class="header-anchor" href="#skills" aria-hidden="true">#</a></h2><h2 id="jobs" tabindex="-1">Jobs <a class="header-anchor" href="#jobs" aria-hidden="true">#</a></h2><h3 id="adding-and-editing-similar-jobs" tabindex="-1">Adding and editing similar jobs <a class="header-anchor" href="#adding-and-editing-similar-jobs" aria-hidden="true">#</a></h3><p><strong>Todo:</strong> Manipulate similar jobs, keep it dynamic while the list of jobs changes</p><p>This is a complex problem. Finding similar jobs requires a thorough search in the whole job database for jobs that requires very similar skillset. The best would be to do it automatically, but offering jobs the same way we offer skills would be another way. Also we need to avoid duplicates when entering jobs, and since we want to automate the job entry, the app should be able to offer similar jobs during setting up a job and make sure these aren’t exactly the same. Maybe should consider similar job titles as group and not individual job. Not sure that this should be implemented at this point.</p><p>Jira: <a href="https://talentexploit.atlassian.net/browse/TAL-435" target="_blank" rel="noreferrer">TAL-435</a> (later will be devided into smaller jobs)</p>',26),r=[o];function n(h,l,d,c,b,p){return a(),t("div",null,r)}const g=e(s,[["render",n]]);export{m as __pageData,g as default};