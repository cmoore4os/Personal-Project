# brainstorm

* **Prompt**

  * changes weekly (might change to daily, or monthly)
  * actions need
    * post to db
    * get to db
  * user interactions
    * clicking on a prompt a user should be given a choice to either:
      * create/edit a outline (if edit must return user's version)
      * create/edit a story (if edit must return user's version)
  * Questions and Decisions
    * should this be improvised on the server or the client. My thoughts since at this time nothing in the client changes the prompt it should be placed on the server, but I am not sure if this is correct

* **User**

  * must log in to store their work to the server
  * must be able to CRUD the work
  * may comment/like other users' works
  * may report inappropriate actions of other users
  * User type: user, admin
  * User levels: free, paid
  * Proposed Tiers to cover costs

    * free tier (the only one currently)
      * twenty 2000 words/max stories and 40 outlines
    * bronze supporter tier
      * higher limits?
    * silver supporter tier
      * even higher limits
    * gold supporter tier
      * mega limits;
    * platinum supporter tier

      * how many short stories will one user write? what ever this tier is Administrator(me) will have access to it.

    * _actions needed_
      * create user:
        * realName, email, password, level, tier, avatar, username, bio
      * get user plus connect them to their stories created, stories rated
      * update user
      * delete user

* Stories
  * should be based on the given prompt
  * must be 2000 word or less
  * must have a content-level rating
  * must have at least one genre selected
  * must be connected to a user; if user is deleted, stories are deleted
  * must keep a record of other user's ratings
  * can tags
