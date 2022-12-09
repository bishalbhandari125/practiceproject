import React from 'react'

const data = [
  "Chapter 1",
  "IntroductionIntroductionERP Control Panel",
  "ERP",
  "ERP Control Panel",
  "the Administration Page",
  "Administration",
  "ERP Control Panel",
  "View",
  "StatementAs",
  "TU",
  "six",
  "ten weeks/180 hour",
  "jobTo",
  "Control Panel",
  "ERP",
  "ERP Control Panel",
  "100 %",
  "OrganizationChapter 2",
  "Chapter 3",
  "weekly",
  "4",
  "Chapter 2:",
  "August 16, 2018",
  "Nepal",
  "InfoxIT",
  "Customize",
  "InfoxIT",
  "Organizational HierarchyInfoxIT Pvt. Ltd.",
  "2.1",
  "DevelopmentPHPNodeJava/JSPFlutterDatabase ManagementMySQLMySQL Server",
  "2005/2008Oracle 9i/10gSQLiteMongoDBIT",
  "ConsultingNetwork",
  "Intern DepartmentThe",
  "ERP Control Panel System",
  "two",
  "the ERP Control Panel System",
  "Timesheet",
  "the ERP Control Panel System",
  "Chapter 3",
  "UI",
  "two",
  "the ERP Control Panel System",
  "Ticketing",
  "Timesheet",
  "the day",
  "Weekly",
  "ERP",
  "ERP Control Panel",
  "the Administration Page",
  "3.1",
  "ERP Control Panel",
  "3.2",
  "ERP Control Panel",
  "UI",
  "UI",
  "API",
  "Chapter 4:",
  "InfoxIT Pvt. Ltd.",
  "first",
  "Nepal",
  "today",
  "InfoxIT",
  "JavaScript",
  "the client.4.2 Learning OutcomeOverall",
  "Marijn Heverbeke",
  "December 4",
  "The Road to Learn React",
  "Robin Wieruch",
  "November 15",
  "Braccio Hering",
  "April 14"
]



const LastColDetails = () => {
  return (
    <div className='h-screen w-48 p-3 bg-gray-900 text-gray-300 overflow-y-scroll overflow-x-auto'>
      <h3 className='font-bold'>List of Entities</h3>
      <hr></hr>
      {
        data.map((item , id)=> (
          <div key={id} className='text-xs'>{item}</div>
        ))
      }
    </div>
  )
}

export default LastColDetails
