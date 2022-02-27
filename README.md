Inspiration
We have been following the crisis happening in Eastern Europe really closely, doing everything in our power to help. Following the news, one event caught our team’s eye. On February 24th Patreon (a crowdfunding website) decided to take down an NGO’s (Come Back Alive) crowdfunding page because they provided aid to those who were fending off an invasion. This event has been the leading cause for us to develop BlockAid.

We want to decentralize the crowdfunding process so no company can do what Patreon did to a humanitarian organization.

What it does
BlockAide is a transparent, fee-less, and decentralized crowdsourcing platform. BlockAide is meant to be used by anyone who would like to raise money for a cause, whether that may be a hospital bill; a new scooter; or tools to stand against an oppressive government. BlockAide is especially useful in critical situations such as what is happening in Eastern Europe right now. This is because our transactions are both transparent, and anonymous thanks to our use of Ether as our currency.

To use our platform to raise money, simply sign up through our swift process, then create a crowdfunding project on our “Create” tab.

If you are feeling generous, and would like to donate, then there is no need to sign up! Simply navigate to the “Donate” tab, find a cause you’d like to donate to, copy their Ethereum address, navigate to the transactions tab, paste the address & type the amount of Ether you’d like to donate, then donate! (You will be navigated to MetaMask to complete the transaction).

How we built it
BlockAide is a web app built with React.js. We also utilized the frameworks Ethers.js, Node.js, Bootstrap, SimpleParallax.js, Superagent, and Firebase-React. Lastly, we used MetaMask (through Ethers.js) to ensure that the Ether transactions on our platform are safe.

We have divided the work into 3 parts. Olsen dealt with the backend by integrating Firebase, and Ethers.js/Metamask into our React project. Niya has built the scaffold for the frontend of our project using React. Lastly, Tim has polished up our web app to make it as elegant as it is right now!

Challenges we ran into
Where do we start? Almost all of the frameworks we used were completely new to us. Still, we were able to create an application that all of us are proud of!

Security:
We know that our application will be utilized for critical purposes involving money. Thus, we have done everything we can to ensure that our application is composed of industry tried & tested tools and methods. Still, we recognize that our application is no “Fort Knox” given the following reasons:

1)The limited time period we had to work on this project. 2)Our experience in cyber security (or lack thereof, haha!). 3)Our possible wrong use/implementation of an industry standard. 4)The possible vulnerabilities within the industry tried & tested tools and methods that we utilized.

This is by no means to justify our shortcomings, but rather put things into perspective. Still, we believe that our project is as secure as a hackathon project can be. Here is a list of the tools we used, and why they are secure/not secure.

HTTPS: Our program (once deployed) will communicate with its clients through a secure channel, using public/private key encryption. Given that there isn’t enough computational power (yet!) to break this method, and (hoping) that our clients won’t fall for attacks such as a man-in-the-middle attack, our communication channel will not be compromised.

Pitfall: Possible man-in-the-middle attack.

Firebase: We use Firebase to store the crowdfunding projects. Given that the crowdfunding information is already public and meant to be public (we presume), a leak would not cause an issue. This information is public by design, but it is still secured by Firebase as an extra security measure.

Pitfall: Our system is not secured against a DDOS attack, and it can be easily overwhelmed by numerous requests. We also chose to use the standard development safety procedures Firebase suggested, so we would need to change the permissions before deployment. Lastly, we chose not to check for the integrity and the format of the incoming data which is bad practice.

Ethereum Transactions: We utilized MetaMask to carry out our transactions. The only input that we are responsible for is to construct the transaction through our application. After the user fills out the address they’d like to send Ether to, and the amount of Ether, it is MetaMask’s responsibility to ensure the integrity of the transaction process.

Pitfall: We assume that the Ethers framework & Metamask is not compromised, which could damage the integrity of our application.

Auth0: We used Auth0 to handle our authentication system. We trust Auth0 to use the best practices to store user information and passwords (including salting and hashing the passwords).

Pitfall: If Auth0 is compromised, so is our application. This could be mitigated by our users if they can confirm Eth addresses through other means. Still, it is a pitfall nonetheless.

We have done everything we can to ensure our app is safe, and we will own up to any mistakes we made. We still believe our project is as secure as any hackathon project can be!

What's next for BlockAid
1) Possibly using Monero to make transactions even more anonymous OR using Hedera to cut down the gas costs. 2) Using DeSo to replace Firebase and store the crowdfunding projects. 3) Deploy the project to our Domain, BlockAid.tech. 4) Use extensive tests to make sure our application is safe and secure.
