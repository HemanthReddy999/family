// EDIT THIS FILE to add your family members.
// Generation numbers are calculated automatically from parent/child relationships.
const family = {
  grandfather:{name:"Rama Rao",gender:"male",spouse:"grandmother",children:["father","uncle"],birth:"1940",notes:"Family elder"},
  grandmother:{name:"Lakshmi Devi",gender:"female",spouse:"grandfather",children:["father","uncle"],birth:"1945"},
  father:{name:"Srinivas Rao",gender:"male",spouse:"mother",parents:["grandfather","grandmother"],children:["son","daughter"],birth:"1970"},
  mother:{name:"Padma",gender:"female",spouse:"father",children:["son","daughter"],birth:"1975"},
  uncle:{name:"Prakash Rao",gender:"male",spouse:"aunt",parents:["grandfather","grandmother"],children:["cousin"],birth:"1968"},
  aunt:{name:"Saroja",gender:"female",spouse:"uncle",children:["cousin"],birth:"1972"},
  son:{name:"Arjun",gender:"male",parents:["father","mother"],spouse:"wife",children:["grandson"],birth:"2000"},
  daughter:{name:"Ananya",gender:"female",parents:["father","mother"],birth:"2003"},
  cousin:{name:"Kiran",gender:"male",parents:["uncle","aunt"],birth:"1998"},
  wife:{name:"Priya",gender:"female",spouse:"son",children:["grandson"],birth:"2002"},
  grandson:{name:"Aarav",gender:"male",parents:["son","wife"],birth:"2028"}
};