# Food For All - A TechHearts project

Food For All is a platform to connect NGOs, Foundations, Instituites and individuals to people especially (migrant labourers and daily wage workers) that require aid, supplies, survivial kits and most important FOOD. The platform is to help out the less privileged people that are stranded, isolated, or in containment zones, are hungry and in need of basic humanatiaran help. 

## Contents

1. [Short description](#short-description)
2. [Usecase Demo Video](#usecase-demo-video)
3. [Technical Demo Video](#technical-demo-video)
4. [Architecture](#architecture)
5. [Long description](#long-description)
6. [Project roadmap](#project-roadmap)
7. [Live demo](#live-demo)
8. [Built with](#built-with)
9. [Authors](#authors)
10. [Acknowledgements](#acknowledgements)

## Short Description 

  **Problem Statement**
  - _"If Covid doesn't kill you - Hunger will"_ That seems to be the heartbreaking reality for the millions of daily wage workers and migrant labourers who suddenly have no jobs and no source of income. If the most basic necessity - two square meals a day, are not met, they do not stand a chance for survival. This is the time that requires humankind to come together, united as one family, by caring for and providing for the lesser privileged sections of the society that have been the foundations of our daily comfortable life.
 - It requires the coming together of NGOs, governments, industries, foundations and the common public, both in terms of funding and distribution management on the field to the needy.
  
 **Solution Overview**
 - In order to provide the right kind of aid to the right people at the right time, we need to have access to the right information. We plan to use various sources like news portals, government communications, volunteer alerts to get the real time information of migrants/daily-wage workers location, in-transit information, government quarantine institutes, containment zones and extract that information to get exact location coordinates where help is required. 
- This location information is then alerted to the nearest NGOs that have registered in the portal - who can choose to accept the call for help depending on their resource availability. 
- If it is a moving target, like in-transit migrant labourers, the system use tracking in real-time and predict where the targetted destination will be. 
- Specifically to solve the stale food issue seen recently, paging out is done in a controlled manner, to the NEAREST NGOs so that food can be prepared fresh and there will no wastage because only the required number of NGOs are paged and there is no overlap.
- Our solution is a one-stop technical platform where we connect the NGOs to the exact location coordinates where help is required

## Usecase Demo Video
[![Usecase Video](https://user-images.githubusercontent.com/26574170/83936366-b20e0e80-a7e0-11ea-8a26-70ab96613b2d.png)](https://www.youtube.com/watch?v=ipGtl8ZZUMc&feature=youtu.be)

## Technical Demo Video

## Architecture
![FoodForAll (16) (2)](https://user-images.githubusercontent.com/26574170/83896952-8e13e400-a772-11ea-92c0-1245ff285ae6.png)

![FoodForAll-IBMTechnologies (19)](https://user-images.githubusercontent.com/26574170/83896924-83f1e580-a772-11ea-9217-32a930118474.png)

## Long Description
This will be a technical description of the solution.

**Step 1. Data Sourcing** 
    - **Watson discovery** is an enterprise search engine that can comb through a unstructured "document collection" and retireve the relevant information based on a search query criteria. The document collection that we have used for building the solution is the standard open news portals and webpages. Some of the sample search query strings that we have used for demo are 
       - "migrant labourers india"
       - "containment zones"
       - "government quarantine"
    -  This results in a set of results in the JSON format with relevant snapshot passages and the link to the news portal.
For example
 `{"id":"43n8kjT2J9iDSfShiBm-Tbct_3RDKPlhhuvK5-iGvimrGsGq7MJ23CelkoqpNVcl","result_metadata":{"score":13.553546},"text":"Kolkata: Bihar migrant workers return to Patna from Ernakulam via a Special Shramik train during the extended nationwide lockdown, on May 4, 2020. (Photo: IANS) A 1000-bed facility being contructed at the exhibition ground in Mumbai's Bandra Kurla Complex to provide quarantine and isolation facilities for non-critical COVID-19 patients during"},{"id":"iIJskt42jTul79P790Kv11j3cykUlb8kwzlkiaztvg1DfyaW9MOAZ5Qrqnvn_AbG"`
 
  - **Storage** - For data storage we plan to use **MongoDB** for JSON data and **DB2** for final transactional data for the web portal.
  
**Step 2. Data Parsing** 
   - From the JSON data, entities such as the LOCATION (`Kolkota, Bihar, Patna, Ernakulam, Bandra Kurla Complex`), DATE (`May 4th, 2020`), QUANTITY (`1000`) is extracted to construct meaningful information about WHERE exactly help is required and by WHEN. 
   - This requires NLP and Text Analytics to extract the right information. For example, from the above snippet - potentially, only the migrant workers require help. The second news item is just _informational_ news about the preparation of facilities by the government.  We plan to use **Watson Natural Language Processor** to do the extraction. For the purpose of demo, we have extracted information manually.
   
**Step 3. Data Analytics**
   - From the previous step, we have arrived at a set of locations that require help. We need to next infer the nearest NGOs, (say within 20 KMs) so that they can be alerted for help.
   - This requires geohashing and spatio temporal analytics to find the "nearest neighbours" within the specified radius.
   - We have done this using IBM Watson Studo's python notebooks and using Spark as the runtime.
   - The data is then plotted on a map for visualization.
  
 **Step 4. Data Visualization**
  - We have developed three visualization charts using IBM Cognos Dashboard that will reflect real-time data about the following. This will help to understand visually the trends and patterns.
     - a. NGOs enrolled on the platform
     - b. Locations Needing Aid
     - c. Supplies Needed at a location
   
 **Step 5. Web Portal**
 - This is the user interface portal for the stake holders such as the NGOs and the portal admins to login and check for help requests and take action. It gives a display of the location, quantity and due date for the items. Action can be taken by NGOs to accept the call or deny if they are unable to fulfill the request.
 - The webapp has been developed using ReactJS and deployed on Cloud Foundry. Design uses IBM Carbon components that offers a unified and integrated user experience. 
 
   
## Project Roadmap
 - In the last three days of the hackathon, we have had time only to demonstrate the main key features that shows the flow end to end. Our vision for making this a complete platform includes (but is not limited to) the following:
   - Watson Machine Learning - for predictive analytics for accurate predictions on the locations and quantity of help required.
   - Mobile App - that will be complementary to the webapp
   - Citizen Volunteer Alerts - Connecting individuals to the platform. 

## Live Demo

http://food-for-all.mybluemix.net/

Go Ahead! Try it out! Don't forget to look at the dashboard too! :) 

## Built With

Driven by TechHearts, Powered on IBM Cloud
1. [Watson Discovery](https://cloud.ibm.com/catalog/services/discovery?location=eu-gb)
2. [Apache Spark](https://spark.apache.org/) on [Watson Studio](https://cloud.ibm.com/catalog/services/watson-studio) 
3. [React JS Web App deployed on IBM Cloud Foundry](https://www.cloudfoundry.org/the-foundry/ibm-cloud-foundry/#). Design uses [IBM Carbon Components](https://www.carbondesignsystem.com/tutorial/react/overview) 
4. [IBM Cognos Dashboard](https://cloud.ibm.com/catalog/services/ibm-cognos-dashboard-embedded)

Coming up in the roadmap...


## Authors
1. [Deepashree Gandhi](https://github.com/deepashreeraghu)
2. [Lawang Mishra](https://github.com/lawmishr)
3. [Mrudula Madiraju](https://github.com/mrmadira)
4. [Rakhi Arora](https://github.com/rakharor)
5. [Surbhi Bakhtiyar](https://github.com/surbhibakhtiyar)

## Acknowledgements
Shruthi S Rao

