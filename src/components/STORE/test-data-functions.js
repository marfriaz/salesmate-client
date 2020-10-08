var faker = require("faker");
const industries = require("./industries");
const countries = require("./countries");
const companies = require("./companies");
const titles = require("./contact_titles");

function generateContactNames() {
  var a = [];
  for (var i = 0; i < 50; i++)
    a.push(faker.fake("{{name.firstName}} {{name.lastName}}"));
  return a;
}
function generatePhoneNumbers() {
  var a = [];
  for (var i = 0; i < 50; i++) a.push(faker.phone.phoneNumber());
  return a;
}
function generateContactPhoneNumbers() {
  var a = [];
  for (var i = 0; i < 50; i++) a.push(faker.phone.phoneNumber());
  return a;
}
function generateContactEmails() {
  var a = [];
  for (var i = 0; i < 50; i++) a.push(faker.internet.email());
  return a;
}

function generateFaxNumbers() {
  var a = [];
  for (var i = 0; i < 50; i++) a.push(faker.phone.phoneNumber());
  return a;
}

// function generateAddress() {
//   var a = [];
//   for (var i = 0; i < 50; i++) a.push(rrag.random());
//   return a;
// }

function generateIds() {
  var a = [];
  for (var i = 0; i < 50; i++) a.push(i);
  return a;
}

function generateIndustry() {
  var a = [];
  for (var i = 0; i < 50; i++)
    a.push(industries[Math.floor(Math.random() * industries.length)]);
  return a;
}
function generateStage() {
  const stages = ["Not Interested", "Lead", "Sold"];
  var a = [];
  for (var i = 0; i < 50; i++)
    a.push(stages[Math.floor(Math.random() * stages.length)]);
  return a;
}

function generateContactTitle() {
  var a = [];
  for (var i = 0; i < 50; i++)
    a.push(titles[Math.floor(Math.random() * titles.length)]);
  return a;
}

function generateRange() {
  const ranges = [
    "Self-employed",
    "1-10",
    "11-50",
    "51-200",
    "201-500",
    "501-1000",
    "1001-5000",
    "5001-10,000",
    "10,001+",
  ];
  var a = [];
  for (var i = 0; i < 50; i++)
    a.push(ranges[Math.floor(Math.random() * ranges.length)]);
  return a;
}

function generateCountry() {
  var a = [];
  for (var i = 0; i < 50; i++)
    a.push(countries[Math.floor(Math.random() * countries.length)]);
  return a;
}

function generateCompanies() {
  var a = [];
  for (var i = 0; i < 50; i++) a.push(companies[i]);
  return a;
}

function generateWebsites() {
  const websites = [];
  for (var i = 0; i < 50; i++)
    websites.push("www." + companies[i].replace(" ").toLowerCase() + ".com");
  return websites;
}

function liCoPage() {
  const liCoPages = [];
  for (var i = 0; i < 50; i++)
    liCoPages.push(
      "www.linkedin.com/company/" +
        companies[i].replace(" ").toLowerCase() +
        "/about"
    );
  return liCoPages;
}

function generateInfo() {
  ids = generateIds();
  names = generateContactNames();
  country = generateCountry();
  phone = generatePhoneNumbers();
  contact_phone = generateContactPhoneNumbers();
  fax = generateFaxNumbers();
  industry = generateIndustry();
  company = generateCompanies();
  website = generateWebsites();
  stage = generateStage();
  liCompanyPage = liCoPage();
  range = generateRange();
  contact_email = generateContactEmails();
  contact_title = generateContactTitle();
  // addresses = generateAddress();
  var items = ids.map((id, index) => {
    return {
      id: id,
      name: company[id],
      contact: {
        name: names[id],
        phone: contact_phone[id],
        email: contact_email[id],
        title: contact_title[id],
      },
      // address: addresses[id],
      website: website[id],
      phone: phone[id],
      stage: stage[id],
      fax: fax[id],
      country: country[index].name,
      territory: country[index].territory,
      industry: industry[index],
      licopage: liCompanyPage[id],
      employee_range: range[id],
    };
  });
  return items;
}
console.log(generateInfo());
// const store = generateInfo();

// module.exports = store;

// accountList: [
//     {
//       id: 1,
//             name: "Fog Harbor Fish House",
//       stage: "lead",
//      website: '',
//      phone: "(415) 421-2442",
//      fax: "(415) 421-2442",
//      industry: 'Technology',
//      territory: 'NAMER',
//      employee_range: '1-10',
//      LI_CO_Page: 'www.url.com',
//      Address: 'The Embarcadero, Ste A-202, San Francisco, CA 94133',
//      Contacts: [{name: 'Marco Friaz', title: 'Biz Analyst', Phone: "(415) 421-2442", Email: 'yes@gmail.com' }],
//     }
