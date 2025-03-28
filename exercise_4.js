let productsData = [];
let loyaltyData = [];

// async function fetchProductData(operatingCompany, cycleCode, accountNumber) {
//   const apiUrl = `https://api.insightsc3m.com/PricePromotions/v3/ProductPriceAndAllowances?operatingCompany=${operatingCompany}&cycleCode=${cycleCode}&accountNumber=${accountNumber}`;
//   const response = await fetch(apiUrl); // Fetch data from API
//   productsData = await response.json();
// }
// async function fetchLoyaltyData(operatingCompany, cycleCode, accountNumber) {
//   const apiUrl = `https://api.insightsc3m.com/LoyaltyFundAllowances/v1/LoyaltyFundAllowances?operatingCompany=${operatingCompany}&cycleCode=${cycleCode}&accountNumber=${accountNumber}`;
//   const response = await fetch(apiUrl); // Fetch data from API
//   loyaltyData = await response.json();
// }
// fetchProductData("0004", "202502", "125732");
// fetchLoyaltyData("0004", "202502", "125732");

//^^pretend the code above works. Currently not working due to account consent issues.
//After the code runs, the productsData and loyaltyData array would look like this:
productsData = [
  {
    Header: {
      Disclaimer:
        "This API provides a list of select Altria Tobacco Operating Company (“ATOC”) products and applicable Price Promotion Allowances based on a Retail Account’s Store-level promotional elections.  For select Philip Morris USA Price Promotions, a Store’s applicable Marlboro Non-Promoted Eligibility Price (based on Retailer election and geographic availability) is included for reference based on the Store’s specific program election(s).  For completedetails of ATOC programs and promotional resources, Retailers should reference insightsc3m.com.  This report is for informational purposes only and for the convenience of our retail trade partners in executing ATOC Price Promotions. This report reflects a Store’s current promotional elections and the applicable Promotional Allowance rates/buydowns available at the time of issuance. “MaxSuggested Retail Selling Price” is intended to illustrate full pass through of the applicable ATOC Price Promotions in which Retailer has elected to participateduring the Promotion Period.  The Max Suggested Retail Selling Price is a recommendation only and reflects the maximum price at which a Retailer will remain eligible to earn all Promotional Allowances applicable to an ATOC SKU.  Retailers are always free to further reduce the prices of its products.    The information contained in this report is intended to supplement a Retailer’s own Price Promotion validation process, and is not intended to, nor should it be relied upon, exclusively. Pricing in accordance with the recommendations contained in this report does not guarantee payment. Retailer’s participation in any program or Promotion is subject to the terms and conditions set forth in any applicable Agreement or Promotion Notice.  For complete details on Price Promotions, including availability and terms and conditions of participation, please reference the applicable Promotion Notices on www.insightsc3m.com, or contact your AGDC representative.  Third party pricebookmanagers may access API information on behalf of a Retailer with Retailer’s written consent submitted to AGDC.  By accessing the API, any such third party agrees to hold confidential all information contained in the API, including a Retailer’s Price Promotion elections.  Third party pricebookmanagers may utilize information from the API only in furtherance of executing the Price Promotions on behalf of such Retailer in accordance with Retailer’s independent pricing decisions, and may not sell, publish, maintain, aggregate, create derivative works of, or otherwise utilize information accessedfrom the API for any other purposes without AGDC’s written consent.  AGDC, on behalf of PM USA, USSTC, JMC, Helix and NJOY reserves the right to modify or cancel a Promotion at any time.  In the event of a conflict between the information contained in this API and the applicable Retail Trade Announcement, the applicable Retail Trade Announcement controls.",
      JsonVersion: "3.0",
    },
    Stores: [
      {
        RCN: "125732",
        StoreNumber: "N/A",
        ProgramOption: "Blended",
        Address: "7110 Ritchie Hwy",
        City: "Glen Burnie",
        State: "MD",
        Zip: "21061",
        Latitude: "39.181213",
        Longitude: "-76.614121",
      },
    ],
    Products: [
      {
        SKUGUID: "1FE26012-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Gold King Soft",
        Brand: "Marlboro Mainline Non-Menthol",
        Packings: [
          {
            UPC: "028200137807",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200003782",
            SuppressedUPC: "02837822",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "444F4412-86F7-E011-A5EF-001517C5D911",
        SKUName: "L&M King Men Box",
        Brand: "L&M",
        Packings: [
          {
            UPC: "028200310316",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200310323",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "13047B12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Menthol Black Spcl Blend King B",
        Brand: "Marlboro Black Menthol",
        Packings: [
          {
            UPC: "028200195401",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200009548",
            SuppressedUPC: "02895428",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "9F0C7B12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Gold 100 Soft",
        Brand: "Marlboro Mainline Non-Menthol",
        Packings: [
          {
            UPC: "028200004376",
            SuppressedUPC: "02843726",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200143709",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "45127B12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Red Label 100 Box",
        Brand: "Marlboro Red Label",
        Packings: [
          {
            UPC: "028200136909",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200003690",
            SuppressedUPC: "02836920",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "9B037B12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro ICE King Men Box",
        Brand: "Marlboro Mainline Menthol",
        Packings: [
          {
            UPC: "028200009494",
            SuppressedUPC: "02894924",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200194909",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "A1137B12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Spcl Select Red 100 Box",
        Brand: "Marlboro Special Select",
        Packings: [
          {
            UPC: "028200156808",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200005687",
            SuppressedUPC: "02856827",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "A0D96012-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Blue 83 Men Box",
        Brand: "Marlboro Mainline Menthol",
        Packings: [
          {
            UPC: "028200137609",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200003768",
            SuppressedUPC: "02837628",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "6DA57E51-CE88-E911-8108-6EAE8B4B5A8B",
        SKUName: "MARL MENTHOL BOLD ICE",
        Brand: "Marlboro Mainline Menthol",
        Packings: [
          {
            UPC: "028200331311",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200331328",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "30A41109-49D3-E811-80FF-6EAE8B4B5A8B",
        SKUName: "CHESTERFIELD MENTHOL BOX",
        Brand: "Chesterfield",
        Packings: [
          {
            UPC: "028200330413",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200330420",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "60077B12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro 100 Soft",
        Brand: "Marlboro Mainline Non-Menthol",
        Packings: [
          {
            UPC: "028200136206",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200003621",
            SuppressedUPC: "02836221",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "3A534412-86F7-E011-A5EF-001517C5D911",
        SKUName: "L&M Bold King Men Box",
        Brand: "L&M",
        Packings: [
          {
            UPC: "028200315519",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200315526",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "8ABE6012-86F7-E011-A5EF-001517C5D911",
        SKUName: "L&M Blue 100 Box",
        Brand: "L&M",
        Packings: [
          {
            UPC: "028200310217",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200310224",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "1F017B12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Smth King Men Box",
        Brand: "Marlboro Mainline Menthol",
        Packings: [
          {
            UPC: "028200132307",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200003232",
            SuppressedUPC: "02832322",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "65E46012-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Gold King Men Box",
        Brand: "Marlboro Mainline Menthol",
        Packings: [
          {
            UPC: "028200140104",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200004017",
            SuppressedUPC: "02840127",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "DB64606F-84E3-EB11-A7AD-501AC5568175",
        SKUName: "L&M SIMPLE TOBACCO GREEN",
        Brand: "L&M",
        Packings: [
          {
            UPC: "028200335715",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200335722",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "8D3562B6-384F-E111-A424-001517C5DB15",
        SKUName: "Marlboro 83s King Box",
        Brand: "Marlboro Mainline Non-Menthol",
        Packings: [
          {
            UPC: "028200318510",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200318527",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "B00825F4-D7D2-EA11-9B05-0003FFE49879",
        SKUName: "MARL BLACK SPECIAL BLEND 100 BOX",
        Brand: "Marlboro Black Non-Menthol",
        Packings: [
          {
            UPC: "028200195302",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200174673",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "Y",
          },
          {
            UPC: "028200009531",
            SuppressedUPC: "02895321",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200583710",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "Y",
          },
        ],
      },
      {
        SKUGUID: "2D37A381-1875-ED11-AC20-14CB65725109",
        SKUName: "MARL BLACK GOLD PACK 100 BOX",
        Brand: "Marlboro Black Non-Menthol",
        Packings: [
          {
            UPC: "028200334916",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200179326",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "Y",
          },
          {
            UPC: "028200001672",
            SuppressedUPC: "02816722",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200609410",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "Y",
          },
        ],
      },
      {
        SKUGUID: "A9E26012-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Gold King Box",
        Brand: "Marlboro Mainline Non-Menthol",
        Packings: [
          {
            UPC: "028200138408",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200003843",
            SuppressedUPC: "02838423",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "DC2FB349-44A5-EA11-8118-6EAE8B4B5A8B",
        SKUName: "MARL GOLD LABEL BOX",
        Brand: "Marlboro Gold Label",
        Packings: [
          {
            UPC: "028200332424",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200332417",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "20A41109-49D3-E811-80FF-6EAE8B4B5A8B",
        SKUName: "CHESTERFIELD BOX",
        Brand: "Chesterfield",
        Packings: [
          {
            UPC: "028200330215",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200330222",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "6D0E7B12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Silver 100 Men Box",
        Brand: "Marlboro Mainline Menthol",
        Packings: [
          {
            UPC: "028200148506",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200004857",
            SuppressedUPC: "02848527",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "AD0D7B12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Gold 100 Men Box",
        Brand: "Marlboro Mainline Menthol",
        Packings: [
          {
            UPC: "028200147103",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200004710",
            SuppressedUPC: "02847120",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "ED259512-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro 72mm Box",
        Brand: "Marlboro 72s Non-Menthol",
        Packings: [
          {
            UPC: "028200196309",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200009630",
            SuppressedUPC: "02896320",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "DC64606F-84E3-EB11-A7AD-501AC5568175",
        SKUName: "L&M SIMPLE TOBACCO YELLOW",
        Brand: "L&M",
        Packings: [
          {
            UPC: "028200335524",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200335517",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "4BF97A12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Spcl Select Red King Box",
        Brand: "Marlboro Special Select",
        Packings: [
          {
            UPC: "028200156501",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200005656",
            SuppressedUPC: "02856526",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "DD1D9512-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Smth 100 Men Box",
        Brand: "Marlboro Mainline Menthol",
        Packings: [
          {
            UPC: "028200130303",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200003034",
            SuppressedUPC: "02830324",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "AA0825F4-D7D2-EA11-9B05-0003FFE49879",
        SKUName: "MARL BLACK SPECIAL BLEND BOX",
        Brand: "Marlboro Black Non-Menthol",
        Packings: [
          {
            UPC: "028200174321",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "Y",
          },
          {
            UPC: "028200577719",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "Y",
          },
          {
            UPC: "028200195203",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200009524",
            SuppressedUPC: "02895224",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "E664606F-84E3-EB11-A7AD-501AC5568175",
        SKUName: "L&M SIMPLE TOBACCO ORANGE",
        Brand: "L&M",
        Packings: [
          {
            UPC: "028200335425",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200335418",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "22C06012-86F7-E011-A5EF-001517C5D911",
        SKUName: "L&M Bold 100 Men Box",
        Brand: "L&M",
        Packings: [
          {
            UPC: "028200315618",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200315625",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "65F07A12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marl Silver Pk Bx",
        Brand: "Marlboro Mainline Non-Menthol",
        Packings: [
          {
            UPC: "028200147707",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200004772",
            SuppressedUPC: "02847722",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "E381B97F-D31A-E911-8102-6EAE8B4B5A8B",
        SKUName: "CHESTERFIELD BLUE BOX",
        Brand: "Chesterfield",
        Packings: [
          {
            UPC: "028200330727",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200330710",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "F0077B12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro 100 Box",
        Brand: "Marlboro Mainline Non-Menthol",
        Packings: [
          {
            UPC: "028200003638",
            SuppressedUPC: "02836328",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200136305",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "58C06012-86F7-E011-A5EF-001517C5D911",
        SKUName: "L&M Turkish Blend 100 Box",
        Brand: "L&M",
        Packings: [
          {
            UPC: "028200314024",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200314017",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "62087B12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro 100 Men Box",
        Brand: "Marlboro Mainline Menthol",
        Packings: [
          {
            UPC: "028200136404",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200003645",
            SuppressedUPC: "02836425",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "C90C7B12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Gold 100 Box",
        Brand: "Marlboro Mainline Non-Menthol",
        Packings: [
          {
            UPC: "028200146502",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200004659",
            SuppressedUPC: "02846529",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "902B4137-D29B-E311-AC84-001517C5D911",
        SKUName: "MARL MENTHOL SLATE 100 BOX",
        Brand: "Marlboro Black Menthol",
        Packings: [
          {
            UPC: "028200324313",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200324320",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "47FA7A12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Spcl Blend Grn King Men Box",
        Brand: "Marlboro Special Select",
        Packings: [
          {
            UPC: "028200007070",
            SuppressedUPC: "02870720",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200170705",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "EF2FB349-44A5-EA11-8118-6EAE8B4B5A8B",
        SKUName: "MARL GOLD LABEL 100 BOX",
        Brand: "Marlboro Gold Label",
        Packings: [
          {
            UPC: "028200332516",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200332523",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "F4504412-86F7-E011-A5EF-001517C5D911",
        SKUName: "L&M Blue King Box",
        Brand: "L&M",
        Packings: [
          {
            UPC: "028200310019",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200310026",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "2DA41109-49D3-E811-80FF-6EAE8B4B5A8B",
        SKUName: "CHESTERFIELD 100 BOX",
        Brand: "Chesterfield",
        Packings: [
          {
            UPC: "028200330314",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200330321",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "22A41109-49D3-E811-80FF-6EAE8B4B5A8B",
        SKUName: "CHESTERFIELD MENTHOL 100 BOX",
        Brand: "Chesterfield",
        Packings: [
          {
            UPC: "028200330529",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200330512",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "A1FA7A12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Blend No. 27 King Box",
        Brand: "Marlboro Mainline Non-Menthol",
        Packings: [
          {
            UPC: "028200126405",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200002648",
            SuppressedUPC: "02826428",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "68D56012-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro King Men Box",
        Brand: "Marlboro Mainline Menthol",
        Packings: [
          {
            UPC: "028200136107",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200003614",
            SuppressedUPC: "02836124",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "D664606F-84E3-EB11-A7AD-501AC5568175",
        SKUName: "L&M SIMPLE TOBACCO BLUE",
        Brand: "L&M",
        Packings: [
          {
            UPC: "028200335616",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200335623",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "871C9512-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Blend No. 27 100 Box",
        Brand: "Marlboro Mainline Non-Menthol",
        Packings: [
          {
            UPC: "028200009487",
            SuppressedUPC: "02894827",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200194800",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "45616860-AEB3-E711-80EE-6EAE8B4B5A8B",
        SKUName: "MARL BLACK LABEL BOX",
        Brand: "Marlboro Black Non-Menthol",
        Packings: [
          {
            UPC: "028200328311",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200328328",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "11A86CA4-2411-E111-97F9-001517C5D911",
        SKUName: "Marlboro NXT King Box",
        Brand: "Marlboro Black Menthol",
        Packings: [
          {
            UPC: "028200317728",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200317711",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "61047B12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Southern Cut King Box",
        Brand: "Marlboro Mainline Non-Menthol",
        Packings: [
          {
            UPC: "028200004246",
            SuppressedUPC: "02842426",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200142405",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "BDD3FF4B-5436-E911-8104-6EAE8B4B5A8B",
        SKUName: "MARL MENTHOL SMOOTH ICE BOX",
        Brand: "Marlboro Mainline Menthol",
        Packings: [
          {
            UPC: "028200330611",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200330628",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "47144883-1025-E711-80E5-6EAE8B4B5A8B",
        SKUName: "MARL MENTHOL BLACK 72MM BOX",
        Brand: "Marlboro 72s Menthol",
        Packings: [
          {
            UPC: "028200193506",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200009357",
            SuppressedUPC: "02893527",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "E2534412-86F7-E011-A5EF-001517C5D911",
        SKUName: "L&M 100 Box",
        Brand: "L&M",
        Packings: [
          {
            UPC: "028200309921",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200309914",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "0C544412-86F7-E011-A5EF-001517C5D911",
        SKUName: "L&M 100 Men Box",
        Brand: "L&M",
        Packings: [
          {
            UPC: "028200310415",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200310422",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "932B4137-D29B-E311-AC84-001517C5D911",
        SKUName: "MARL MENTHOL SLATE BOX",
        Brand: "Marlboro Black Menthol",
        Packings: [
          {
            UPC: "028200324214",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200324221",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "CFF67A12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Red Label King Box",
        Brand: "Marlboro Red Label",
        Packings: [
          {
            UPC: "028200136800",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200003683",
            SuppressedUPC: "02836823",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "E51E9512-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Menthol Black Spcl Blend 100 B",
        Brand: "Marlboro Black Menthol",
        Packings: [
          {
            UPC: "028200196408",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200009647",
            SuppressedUPC: "02896427",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "5D0F7B12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marl Silver Pk 100 Bx",
        Brand: "Marlboro Mainline Non-Menthol",
        Packings: [
          {
            UPC: "028200147806",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200004789",
            SuppressedUPC: "02847829",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "0E4F4412-86F7-E011-A5EF-001517C5D911",
        SKUName: "L&M King Box",
        Brand: "L&M",
        Packings: [
          {
            UPC: "028200309822",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200309815",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "A6097B12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Blue 100 Men Box",
        Brand: "Marlboro Mainline Menthol",
        Packings: [
          {
            UPC: "028200137708",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200003775",
            SuppressedUPC: "02837725",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "6D2A9512-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Silver 72mm Box",
        Brand: "Marlboro 72s Non-Menthol",
        Packings: [
          {
            UPC: "028200003867",
            SuppressedUPC: "02838627",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200138606",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "A3EE7A12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Silver King Men Box",
        Brand: "Marlboro Mainline Menthol",
        Packings: [
          {
            UPC: "028200004819",
            SuppressedUPC: "02848129",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200148100",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "E7F97A12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Spcl Select Gold King Box",
        Brand: "Marlboro Special Select",
        Packings: [
          {
            UPC: "028200004222",
            SuppressedUPC: "02842222",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200142207",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "F8CF6012-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro King Soft",
        Brand: "Marlboro Mainline Non-Menthol",
        Packings: [
          {
            UPC: "028200003584",
            SuppressedUPC: "02835824",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200135803",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "CB209512-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Green 72mm Men Box",
        Brand: "Marlboro 72s Menthol",
        Packings: [
          {
            UPC: "028200196200",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200009623",
            SuppressedUPC: "02896223",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "6F289512-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Gold 72mm Box",
        Brand: "Marlboro 72s Non-Menthol",
        Packings: [
          {
            UPC: "028200196507",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200009654",
            SuppressedUPC: "02896524",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "82D06012-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro King Box",
        Brand: "Marlboro Mainline Non-Menthol",
        Packings: [
          {
            UPC: "028200003577",
            SuppressedUPC: "02835727",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200135704",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "2F37A381-1875-ED11-AC20-14CB65725109",
        SKUName: "MARL BLACK GOLD PACK BOX",
        Brand: "Marlboro Black Non-Menthol",
        Packings: [
          {
            UPC: "028200334817",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200179319",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "Y",
          },
          {
            UPC: "028200609311",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "Y",
          },
          {
            UPC: "028200008879",
            SuppressedUPC: "02888729",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "6CD16012-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro King Box 25s",
        Brand: "Marlboro Mainline Non-Menthol",
        Packings: [
          {
            UPC: "028200135506",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200003553",
            SuppressedUPC: "02835523",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "15147B12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Spcl Select Gold 100 Box",
        Brand: "Marlboro Special Select",
        Packings: [
          {
            UPC: "028200142306",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200004239",
            SuppressedUPC: "02842329",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "E581B97F-D31A-E911-8102-6EAE8B4B5A8B",
        SKUName: "CHESTERFIELD BLUE 100 BOX",
        Brand: "Chesterfield",
        Packings: [
          {
            UPC: "028200330819",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200330826",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "EDFF7A12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Midnight King Men Box",
        Brand: "Marlboro Black Menthol",
        Packings: [
          {
            UPC: "028200161307",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200006134",
            SuppressedUPC: "02861324",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "4D137B12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Gold 100 Men Soft",
        Brand: "Marlboro Mainline Menthol",
        Packings: [
          {
            UPC: "028200003737",
            SuppressedUPC: "02837327",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200137302",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "413A22BF-6EB1-E111-83DA-001517C5DB15",
        SKUName: "Marlboro Edge King Box",
        Brand: "Marlboro Black Non-Menthol",
        Packings: [
          {
            UPC: "028200319913",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200319920",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "8E534412-86F7-E011-A5EF-001517C5D911",
        SKUName: "L&M Turkish Blend King Box",
        Brand: "L&M",
        Packings: [
          {
            UPC: "028200313928",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200313911",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
        ],
      },
    ],
    PerUnitAllowances: [
      {
        AllowanceType: "Total Buydown Allowances",
        RCN: ["125732"],
        SKUGUID: [
          "0C544412-86F7-E011-A5EF-001517C5D911",
          "0E4F4412-86F7-E011-A5EF-001517C5D911",
          "22C06012-86F7-E011-A5EF-001517C5D911",
          "3A534412-86F7-E011-A5EF-001517C5D911",
          "444F4412-86F7-E011-A5EF-001517C5D911",
          "58C06012-86F7-E011-A5EF-001517C5D911",
          "8ABE6012-86F7-E011-A5EF-001517C5D911",
          "8E534412-86F7-E011-A5EF-001517C5D911",
          "D664606F-84E3-EB11-A7AD-501AC5568175",
          "DB64606F-84E3-EB11-A7AD-501AC5568175",
          "DC64606F-84E3-EB11-A7AD-501AC5568175",
          "E2534412-86F7-E011-A5EF-001517C5D911",
          "E664606F-84E3-EB11-A7AD-501AC5568175",
          "F4504412-86F7-E011-A5EF-001517C5D911",
        ],
        EligibleUOM: ["CARTON", "PACK"],
        Allowances: [
          {
            Currency: "USD",
            Amount: 0.7,
            StartDate: "2024-02-25",
            EndDate: "2024-03-30",
            ChangeFromPriorPeriod: 0.0,
          },
        ],
      },
      {
        AllowanceType: "Total Buydown Allowances",
        RCN: ["125732"],
        SKUGUID: [
          "0E4F4412-86F7-E011-A5EF-001517C5D911",
          "0C544412-86F7-E011-A5EF-001517C5D911",
          "E2534412-86F7-E011-A5EF-001517C5D911",
          "D664606F-84E3-EB11-A7AD-501AC5568175",
          "F4504412-86F7-E011-A5EF-001517C5D911",
          "58C06012-86F7-E011-A5EF-001517C5D911",
          "22C06012-86F7-E011-A5EF-001517C5D911",
          "E664606F-84E3-EB11-A7AD-501AC5568175",
          "DC64606F-84E3-EB11-A7AD-501AC5568175",
          "DB64606F-84E3-EB11-A7AD-501AC5568175",
          "8ABE6012-86F7-E011-A5EF-001517C5D911",
          "3A534412-86F7-E011-A5EF-001517C5D911",
          "444F4412-86F7-E011-A5EF-001517C5D911",
          "8E534412-86F7-E011-A5EF-001517C5D911",
        ],
        EligibleUOM: ["CARTON", "PACK"],
        NonPromotedEligiblePrice: 12.19,
        Allowances: [
          {
            Currency: "USD",
            Amount: 1.0,
            StartDate: "2024-02-25",
            EndDate: "2024-03-30",
            ChangeFromPriorPeriod: 0.0,
            MaxSuggestedRetailSellingPrice: 9.56,
          },
        ],
      },
      {
        AllowanceType: "Total Buydown Allowances",
        RCN: ["125732"],
        SKUGUID: [
          "11A86CA4-2411-E111-97F9-001517C5D911",
          "13047B12-86F7-E011-A5EF-001517C5D911",
          "902B4137-D29B-E311-AC84-001517C5D911",
          "932B4137-D29B-E311-AC84-001517C5D911",
          "E51E9512-86F7-E011-A5EF-001517C5D911",
          "EDFF7A12-86F7-E011-A5EF-001517C5D911",
        ],
        EligibleUOM: ["CARTON", "PACK"],
        NonPromotedEligiblePrice: 12.19,
        Allowances: [
          {
            Currency: "USD",
            Amount: 1.0,
            StartDate: "2024-02-25",
            EndDate: "2024-03-30",
            ChangeFromPriorPeriod: 0.0,
            MaxSuggestedRetailSellingPrice: 11.19,
          },
        ],
      },
      {
        AllowanceType: "Total Buydown Allowances",
        RCN: ["125732"],
        SKUGUID: [
          "15147B12-86F7-E011-A5EF-001517C5D911",
          "4BF97A12-86F7-E011-A5EF-001517C5D911",
          "A1137B12-86F7-E011-A5EF-001517C5D911",
          "E7F97A12-86F7-E011-A5EF-001517C5D911",
        ],
        EligibleUOM: ["CARTON", "PACK"],
        NonPromotedEligiblePrice: 12.19,
        Allowances: [
          {
            Currency: "USD",
            Amount: 0.55,
            StartDate: "2024-02-25",
            EndDate: "2024-03-30",
            ChangeFromPriorPeriod: 0.0,
            MaxSuggestedRetailSellingPrice: 11.64,
          },
        ],
      },
      {
        AllowanceType: "Total Buydown Allowances",
        RCN: ["125732"],
        SKUGUID: [
          "1F017B12-86F7-E011-A5EF-001517C5D911",
          "4D137B12-86F7-E011-A5EF-001517C5D911",
          "62087B12-86F7-E011-A5EF-001517C5D911",
          "65E46012-86F7-E011-A5EF-001517C5D911",
          "68D56012-86F7-E011-A5EF-001517C5D911",
          "6D0E7B12-86F7-E011-A5EF-001517C5D911",
          "6DA57E51-CE88-E911-8108-6EAE8B4B5A8B",
          "9B037B12-86F7-E011-A5EF-001517C5D911",
          "A0D96012-86F7-E011-A5EF-001517C5D911",
          "A3EE7A12-86F7-E011-A5EF-001517C5D911",
          "A6097B12-86F7-E011-A5EF-001517C5D911",
          "AD0D7B12-86F7-E011-A5EF-001517C5D911",
          "BDD3FF4B-5436-E911-8104-6EAE8B4B5A8B",
          "DD1D9512-86F7-E011-A5EF-001517C5D911",
        ],
        EligibleUOM: ["CARTON", "PACK"],
        NonPromotedEligiblePrice: 12.27,
        Allowances: [
          {
            Currency: "USD",
            Amount: 0.0,
            StartDate: "2024-02-25",
            EndDate: "2024-03-30",
            ChangeFromPriorPeriod: 0.0,
            MaxSuggestedRetailSellingPrice: 12.27,
          },
        ],
      },
      {
        AllowanceType: "Total Buydown Allowances",
        RCN: ["125732"],
        SKUGUID: [
          "1FE26012-86F7-E011-A5EF-001517C5D911",
          "45127B12-86F7-E011-A5EF-001517C5D911",
          "5D0F7B12-86F7-E011-A5EF-001517C5D911",
          "60077B12-86F7-E011-A5EF-001517C5D911",
          "61047B12-86F7-E011-A5EF-001517C5D911",
          "65F07A12-86F7-E011-A5EF-001517C5D911",
          "6CD16012-86F7-E011-A5EF-001517C5D911",
          "82D06012-86F7-E011-A5EF-001517C5D911",
          "871C9512-86F7-E011-A5EF-001517C5D911",
          "8D3562B6-384F-E111-A424-001517C5DB15",
          "9F0C7B12-86F7-E011-A5EF-001517C5D911",
          "A1FA7A12-86F7-E011-A5EF-001517C5D911",
          "A9E26012-86F7-E011-A5EF-001517C5D911",
          "C90C7B12-86F7-E011-A5EF-001517C5D911",
          "CFF67A12-86F7-E011-A5EF-001517C5D911",
          "F0077B12-86F7-E011-A5EF-001517C5D911",
          "F8CF6012-86F7-E011-A5EF-001517C5D911",
        ],
        EligibleUOM: ["CARTON", "PACK"],
        NonPromotedEligiblePrice: 12.19,
        Allowances: [
          {
            Currency: "USD",
            Amount: 0.1,
            StartDate: "2024-02-25",
            EndDate: "2024-03-30",
            ChangeFromPriorPeriod: 0.0,
            MaxSuggestedRetailSellingPrice: 12.09,
          },
        ],
      },
      {
        AllowanceType: "Total Buydown Allowances",
        RCN: ["125732"],
        SKUGUID: [
          "20A41109-49D3-E811-80FF-6EAE8B4B5A8B",
          "22A41109-49D3-E811-80FF-6EAE8B4B5A8B",
          "2DA41109-49D3-E811-80FF-6EAE8B4B5A8B",
          "30A41109-49D3-E811-80FF-6EAE8B4B5A8B",
          "E381B97F-D31A-E911-8102-6EAE8B4B5A8B",
          "E581B97F-D31A-E911-8102-6EAE8B4B5A8B",
        ],
        EligibleUOM: ["CARTON", "PACK"],
        Allowances: [
          {
            Currency: "USD",
            Amount: 0.85,
            StartDate: "2024-02-25",
            EndDate: "2024-03-30",
            ChangeFromPriorPeriod: 0.0,
          },
        ],
      },
      {
        AllowanceType: "Total Buydown Allowances",
        RCN: ["125732"],
        SKUGUID: [
          "2D37A381-1875-ED11-AC20-14CB65725109",
          "2F37A381-1875-ED11-AC20-14CB65725109",
          "413A22BF-6EB1-E111-83DA-001517C5DB15",
          "45616860-AEB3-E711-80EE-6EAE8B4B5A8B",
          "AA0825F4-D7D2-EA11-9B05-0003FFE49879",
          "B00825F4-D7D2-EA11-9B05-0003FFE49879",
          "DC2FB349-44A5-EA11-8118-6EAE8B4B5A8B",
          "EF2FB349-44A5-EA11-8118-6EAE8B4B5A8B",
        ],
        EligibleUOM: ["CARTON", "PACK"],
        NonPromotedEligiblePrice: 12.19,
        Allowances: [
          {
            Currency: "USD",
            Amount: 1.88,
            StartDate: "2024-02-25",
            EndDate: "2024-03-30",
            ChangeFromPriorPeriod: 0.0,
            MaxSuggestedRetailSellingPrice: 10.31,
          },
        ],
      },
      {
        AllowanceType: "Total Buydown Allowances",
        RCN: ["125732"],
        SKUGUID: [
          "47144883-1025-E711-80E5-6EAE8B4B5A8B",
          "CB209512-86F7-E011-A5EF-001517C5D911",
        ],
        EligibleUOM: ["CARTON", "PACK"],
        NonPromotedEligiblePrice: 12.27,
        Allowances: [
          {
            Currency: "USD",
            Amount: 1.15,
            StartDate: "2024-02-25",
            EndDate: "2024-03-30",
            ChangeFromPriorPeriod: 0.0,
            MaxSuggestedRetailSellingPrice: 11.12,
          },
        ],
      },
      {
        AllowanceType: "Total Buydown Allowances",
        RCN: ["125732"],
        SKUGUID: [
          "6D2A9512-86F7-E011-A5EF-001517C5D911",
          "6F289512-86F7-E011-A5EF-001517C5D911",
          "ED259512-86F7-E011-A5EF-001517C5D911",
        ],
        EligibleUOM: ["CARTON", "PACK"],
        NonPromotedEligiblePrice: 12.19,
        Allowances: [
          {
            Currency: "USD",
            Amount: 1.15,
            StartDate: "2024-02-25",
            EndDate: "2024-03-30",
            ChangeFromPriorPeriod: 0.0,
            MaxSuggestedRetailSellingPrice: 11.04,
          },
        ],
      },
    ],
    OtherAllowances: [
      {
        AllowanceType: "Multi-Pack Allowances",
        RCN: ["125732"],
        SKUGUID: [
          "11A86CA4-2411-E111-97F9-001517C5D911",
          "13047B12-86F7-E011-A5EF-001517C5D911",
          "15147B12-86F7-E011-A5EF-001517C5D911",
          "1F017B12-86F7-E011-A5EF-001517C5D911",
          "1FE26012-86F7-E011-A5EF-001517C5D911",
          "2D37A381-1875-ED11-AC20-14CB65725109",
          "2F37A381-1875-ED11-AC20-14CB65725109",
          "413A22BF-6EB1-E111-83DA-001517C5DB15",
          "45127B12-86F7-E011-A5EF-001517C5D911",
          "45616860-AEB3-E711-80EE-6EAE8B4B5A8B",
          "47144883-1025-E711-80E5-6EAE8B4B5A8B",
          "47FA7A12-86F7-E011-A5EF-001517C5D911",
          "4BF97A12-86F7-E011-A5EF-001517C5D911",
          "4D137B12-86F7-E011-A5EF-001517C5D911",
          "5D0F7B12-86F7-E011-A5EF-001517C5D911",
          "60077B12-86F7-E011-A5EF-001517C5D911",
          "61047B12-86F7-E011-A5EF-001517C5D911",
          "62087B12-86F7-E011-A5EF-001517C5D911",
          "65E46012-86F7-E011-A5EF-001517C5D911",
          "65F07A12-86F7-E011-A5EF-001517C5D911",
          "68D56012-86F7-E011-A5EF-001517C5D911",
          "6CD16012-86F7-E011-A5EF-001517C5D911",
          "6D0E7B12-86F7-E011-A5EF-001517C5D911",
          "6D2A9512-86F7-E011-A5EF-001517C5D911",
          "6DA57E51-CE88-E911-8108-6EAE8B4B5A8B",
          "6F289512-86F7-E011-A5EF-001517C5D911",
          "82D06012-86F7-E011-A5EF-001517C5D911",
          "871C9512-86F7-E011-A5EF-001517C5D911",
          "8D3562B6-384F-E111-A424-001517C5DB15",
          "902B4137-D29B-E311-AC84-001517C5D911",
          "932B4137-D29B-E311-AC84-001517C5D911",
          "9B037B12-86F7-E011-A5EF-001517C5D911",
          "9F0C7B12-86F7-E011-A5EF-001517C5D911",
          "A0D96012-86F7-E011-A5EF-001517C5D911",
          "A1137B12-86F7-E011-A5EF-001517C5D911",
          "A1FA7A12-86F7-E011-A5EF-001517C5D911",
          "A3EE7A12-86F7-E011-A5EF-001517C5D911",
          "A6097B12-86F7-E011-A5EF-001517C5D911",
          "A9E26012-86F7-E011-A5EF-001517C5D911",
          "AA0825F4-D7D2-EA11-9B05-0003FFE49879",
          "AD0D7B12-86F7-E011-A5EF-001517C5D911",
          "B00825F4-D7D2-EA11-9B05-0003FFE49879",
          "BDD3FF4B-5436-E911-8104-6EAE8B4B5A8B",
          "C90C7B12-86F7-E011-A5EF-001517C5D911",
          "CB209512-86F7-E011-A5EF-001517C5D911",
          "CFF67A12-86F7-E011-A5EF-001517C5D911",
          "DC2FB349-44A5-EA11-8118-6EAE8B4B5A8B",
          "DD1D9512-86F7-E011-A5EF-001517C5D911",
          "E51E9512-86F7-E011-A5EF-001517C5D911",
          "E7F97A12-86F7-E011-A5EF-001517C5D911",
          "ED259512-86F7-E011-A5EF-001517C5D911",
          "EDFF7A12-86F7-E011-A5EF-001517C5D911",
          "EF2FB349-44A5-EA11-8118-6EAE8B4B5A8B",
          "F0077B12-86F7-E011-A5EF-001517C5D911",
          "F8CF6012-86F7-E011-A5EF-001517C5D911",
        ],
        EligibleUOM: ["PACK"],
        MinimumQuantity: 2,
        QuantityIncrements: 1,
        ManufacturerFundedAmount: 0.25,
        Allowances: [
          {
            Currency: "USD",
            Amount: 0.25,
            StartDate: "2024-02-25",
            EndDate: "2024-03-30",
            ChangeFromPriorPeriod: 0.0,
          },
        ],
      },
    ],
  },
];

loyaltyData = [
  {
    Header: {
      Disclaimer:
        "This API provides a list of select Altria Tobacco Operating Company (“ATOC”) products and applicable Price Promotion Allowances based on a Retail Account’s Store-level promotional elections.  For select Philip Morris USA Price Promotions, a Store’s applicable Marlboro Non-Promoted Eligibility Price (based on Retailer election and geographic availability) is included for reference based on the Store’s specific program election(s).  For completedetails of ATOC programs and promotional resources, Retailers should reference insightsc3m.com.  This report is for informational purposes only and for the convenience of our retail trade partners in executing ATOC Price Promotions. This report reflects a Store’s current promotional elections and the applicable Promotional Allowance rates/buydowns available at the time of issuance. “MaxSuggested Retail Selling Price” is intended to illustrate full pass through of the applicable ATOC Price Promotions in which Retailer has elected to participateduring the Promotion Period.  The Max Suggested Retail Selling Price is a recommendation only and reflects the maximum price at which a Retailer will remain eligible to earn all Promotional Allowances applicable to an ATOC SKU.  Retailers are always free to further reduce the prices of its products.    The information contained in this report is intended to supplement a Retailer’s own Price Promotion validation process, and is not intended to, nor should it be relied upon, exclusively. Pricing in accordance with the recommendations contained in this report does not guarantee payment. Retailer’s participation in any program or Promotion is subject to the terms and conditions set forth in any applicable Agreement or Promotion Notice.  For complete details on Price Promotions, including availability and terms and conditions of participation, please reference the applicable Promotion Notices on www.insightsc3m.com, or contact your AGDC representative.  Third party pricebookmanagers may access API information on behalf of a Retailer with Retailer’s written consent submitted to AGDC.  By accessing the API, any such third party agrees to hold confidential all information contained in the API, including a Retailer’s Price Promotion elections.  Third party pricebookmanagers may utilize information from the API only in furtherance of executing the Price Promotions on behalf of such Retailer in accordance with Retailer’s independent pricing decisions, and may not sell, publish, maintain, aggregate, create derivative works of, or otherwise utilize information accessedfrom the API for any other purposes without AGDC’s written consent.  AGDC, on behalf of PM USA, USSTC, JMC, Helix and NJOY reserves the right to modify or cancel a Promotion at any time.  In the event of a conflict between the information contained in this API and the applicable Retail Trade Announcement, the applicable Retail Trade Announcement controls.",
      JsonVersion: "3.0",
    },
    Stores: [
      {
        RCN: "125732",
        StoreNumber: "N/A",
        ProgramOption: "Blended",
        Address: "7110 Ritchie Hwy",
        City: "Glen Burnie",
        State: "MD",
        Zip: "21061",
        Latitude: "39.181213",
        Longitude: "-76.614121",
      },
    ],
    Products: [
      {
        SKUGUID: "1FE26012-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Gold King Soft",
        Brand: "Marlboro Mainline Non-Menthol",
        Packings: [
          {
            UPC: "028200137807",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200003782",
            SuppressedUPC: "02837822",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "444F4412-86F7-E011-A5EF-001517C5D911",
        SKUName: "L&M King Men Box",
        Brand: "L&M",
        Packings: [
          {
            UPC: "028200310316",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200310323",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "13047B12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Menthol Black Spcl Blend King B",
        Brand: "Marlboro Black Menthol",
        Packings: [
          {
            UPC: "028200195401",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200009548",
            SuppressedUPC: "02895428",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "9F0C7B12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Gold 100 Soft",
        Brand: "Marlboro Mainline Non-Menthol",
        Packings: [
          {
            UPC: "028200004376",
            SuppressedUPC: "02843726",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200143709",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "45127B12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Red Label 100 Box",
        Brand: "Marlboro Red Label",
        Packings: [
          {
            UPC: "028200136909",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200003690",
            SuppressedUPC: "02836920",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "9B037B12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro ICE King Men Box",
        Brand: "Marlboro Mainline Menthol",
        Packings: [
          {
            UPC: "028200009494",
            SuppressedUPC: "02894924",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200194909",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "A1137B12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Spcl Select Red 100 Box",
        Brand: "Marlboro Special Select",
        Packings: [
          {
            UPC: "028200156808",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200005687",
            SuppressedUPC: "02856827",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "A0D96012-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Blue 83 Men Box",
        Brand: "Marlboro Mainline Menthol",
        Packings: [
          {
            UPC: "028200137609",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200003768",
            SuppressedUPC: "02837628",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "6DA57E51-CE88-E911-8108-6EAE8B4B5A8B",
        SKUName: "MARL MENTHOL BOLD ICE",
        Brand: "Marlboro Mainline Menthol",
        Packings: [
          {
            UPC: "028200331311",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200331328",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "30A41109-49D3-E811-80FF-6EAE8B4B5A8B",
        SKUName: "CHESTERFIELD MENTHOL BOX",
        Brand: "Chesterfield",
        Packings: [
          {
            UPC: "028200330413",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200330420",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "60077B12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro 100 Soft",
        Brand: "Marlboro Mainline Non-Menthol",
        Packings: [
          {
            UPC: "028200136206",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200003621",
            SuppressedUPC: "02836221",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "3A534412-86F7-E011-A5EF-001517C5D911",
        SKUName: "L&M Bold King Men Box",
        Brand: "L&M",
        Packings: [
          {
            UPC: "028200315519",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200315526",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "8ABE6012-86F7-E011-A5EF-001517C5D911",
        SKUName: "L&M Blue 100 Box",
        Brand: "L&M",
        Packings: [
          {
            UPC: "028200310217",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200310224",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "1F017B12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Smth King Men Box",
        Brand: "Marlboro Mainline Menthol",
        Packings: [
          {
            UPC: "028200132307",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200003232",
            SuppressedUPC: "02832322",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "65E46012-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Gold King Men Box",
        Brand: "Marlboro Mainline Menthol",
        Packings: [
          {
            UPC: "028200140104",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200004017",
            SuppressedUPC: "02840127",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "DB64606F-84E3-EB11-A7AD-501AC5568175",
        SKUName: "L&M SIMPLE TOBACCO GREEN",
        Brand: "L&M",
        Packings: [
          {
            UPC: "028200335715",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200335722",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "8D3562B6-384F-E111-A424-001517C5DB15",
        SKUName: "Marlboro 83s King Box",
        Brand: "Marlboro Mainline Non-Menthol",
        Packings: [
          {
            UPC: "028200318510",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200318527",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "B00825F4-D7D2-EA11-9B05-0003FFE49879",
        SKUName: "MARL BLACK SPECIAL BLEND 100 BOX",
        Brand: "Marlboro Black Non-Menthol",
        Packings: [
          {
            UPC: "028200195302",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200174673",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "Y",
          },
          {
            UPC: "028200009531",
            SuppressedUPC: "02895321",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200583710",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "Y",
          },
        ],
      },
      {
        SKUGUID: "2D37A381-1875-ED11-AC20-14CB65725109",
        SKUName: "MARL BLACK GOLD PACK 100 BOX",
        Brand: "Marlboro Black Non-Menthol",
        Packings: [
          {
            UPC: "028200334916",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200179326",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "Y",
          },
          {
            UPC: "028200001672",
            SuppressedUPC: "02816722",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200609410",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "Y",
          },
        ],
      },
      {
        SKUGUID: "A9E26012-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Gold King Box",
        Brand: "Marlboro Mainline Non-Menthol",
        Packings: [
          {
            UPC: "028200138408",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200003843",
            SuppressedUPC: "02838423",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "DC2FB349-44A5-EA11-8118-6EAE8B4B5A8B",
        SKUName: "MARL GOLD LABEL BOX",
        Brand: "Marlboro Gold Label",
        Packings: [
          {
            UPC: "028200332424",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200332417",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "20A41109-49D3-E811-80FF-6EAE8B4B5A8B",
        SKUName: "CHESTERFIELD BOX",
        Brand: "Chesterfield",
        Packings: [
          {
            UPC: "028200330215",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200330222",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "6D0E7B12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Silver 100 Men Box",
        Brand: "Marlboro Mainline Menthol",
        Packings: [
          {
            UPC: "028200148506",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200004857",
            SuppressedUPC: "02848527",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "AD0D7B12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Gold 100 Men Box",
        Brand: "Marlboro Mainline Menthol",
        Packings: [
          {
            UPC: "028200147103",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200004710",
            SuppressedUPC: "02847120",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "ED259512-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro 72mm Box",
        Brand: "Marlboro 72s Non-Menthol",
        Packings: [
          {
            UPC: "028200196309",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200009630",
            SuppressedUPC: "02896320",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "DC64606F-84E3-EB11-A7AD-501AC5568175",
        SKUName: "L&M SIMPLE TOBACCO YELLOW",
        Brand: "L&M",
        Packings: [
          {
            UPC: "028200335524",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200335517",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "4BF97A12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Spcl Select Red King Box",
        Brand: "Marlboro Special Select",
        Packings: [
          {
            UPC: "028200156501",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200005656",
            SuppressedUPC: "02856526",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "DD1D9512-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Smth 100 Men Box",
        Brand: "Marlboro Mainline Menthol",
        Packings: [
          {
            UPC: "028200130303",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200003034",
            SuppressedUPC: "02830324",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "AA0825F4-D7D2-EA11-9B05-0003FFE49879",
        SKUName: "MARL BLACK SPECIAL BLEND BOX",
        Brand: "Marlboro Black Non-Menthol",
        Packings: [
          {
            UPC: "028200174321",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "Y",
          },
          {
            UPC: "028200577719",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "Y",
          },
          {
            UPC: "028200195203",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200009524",
            SuppressedUPC: "02895224",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "E664606F-84E3-EB11-A7AD-501AC5568175",
        SKUName: "L&M SIMPLE TOBACCO ORANGE",
        Brand: "L&M",
        Packings: [
          {
            UPC: "028200335425",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200335418",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "22C06012-86F7-E011-A5EF-001517C5D911",
        SKUName: "L&M Bold 100 Men Box",
        Brand: "L&M",
        Packings: [
          {
            UPC: "028200315618",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200315625",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "65F07A12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marl Silver Pk Bx",
        Brand: "Marlboro Mainline Non-Menthol",
        Packings: [
          {
            UPC: "028200147707",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200004772",
            SuppressedUPC: "02847722",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "E381B97F-D31A-E911-8102-6EAE8B4B5A8B",
        SKUName: "CHESTERFIELD BLUE BOX",
        Brand: "Chesterfield",
        Packings: [
          {
            UPC: "028200330727",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200330710",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "F0077B12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro 100 Box",
        Brand: "Marlboro Mainline Non-Menthol",
        Packings: [
          {
            UPC: "028200003638",
            SuppressedUPC: "02836328",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200136305",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "58C06012-86F7-E011-A5EF-001517C5D911",
        SKUName: "L&M Turkish Blend 100 Box",
        Brand: "L&M",
        Packings: [
          {
            UPC: "028200314024",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200314017",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "62087B12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro 100 Men Box",
        Brand: "Marlboro Mainline Menthol",
        Packings: [
          {
            UPC: "028200136404",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200003645",
            SuppressedUPC: "02836425",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "C90C7B12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Gold 100 Box",
        Brand: "Marlboro Mainline Non-Menthol",
        Packings: [
          {
            UPC: "028200146502",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200004659",
            SuppressedUPC: "02846529",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "902B4137-D29B-E311-AC84-001517C5D911",
        SKUName: "MARL MENTHOL SLATE 100 BOX",
        Brand: "Marlboro Black Menthol",
        Packings: [
          {
            UPC: "028200324313",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200324320",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "47FA7A12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Spcl Blend Grn King Men Box",
        Brand: "Marlboro Special Select",
        Packings: [
          {
            UPC: "028200007070",
            SuppressedUPC: "02870720",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200170705",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "EF2FB349-44A5-EA11-8118-6EAE8B4B5A8B",
        SKUName: "MARL GOLD LABEL 100 BOX",
        Brand: "Marlboro Gold Label",
        Packings: [
          {
            UPC: "028200332516",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200332523",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "F4504412-86F7-E011-A5EF-001517C5D911",
        SKUName: "L&M Blue King Box",
        Brand: "L&M",
        Packings: [
          {
            UPC: "028200310019",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200310026",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "2DA41109-49D3-E811-80FF-6EAE8B4B5A8B",
        SKUName: "CHESTERFIELD 100 BOX",
        Brand: "Chesterfield",
        Packings: [
          {
            UPC: "028200330314",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200330321",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "22A41109-49D3-E811-80FF-6EAE8B4B5A8B",
        SKUName: "CHESTERFIELD MENTHOL 100 BOX",
        Brand: "Chesterfield",
        Packings: [
          {
            UPC: "028200330529",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200330512",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "A1FA7A12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Blend No. 27 King Box",
        Brand: "Marlboro Mainline Non-Menthol",
        Packings: [
          {
            UPC: "028200126405",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200002648",
            SuppressedUPC: "02826428",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "68D56012-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro King Men Box",
        Brand: "Marlboro Mainline Menthol",
        Packings: [
          {
            UPC: "028200136107",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200003614",
            SuppressedUPC: "02836124",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "D664606F-84E3-EB11-A7AD-501AC5568175",
        SKUName: "L&M SIMPLE TOBACCO BLUE",
        Brand: "L&M",
        Packings: [
          {
            UPC: "028200335616",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200335623",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "871C9512-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Blend No. 27 100 Box",
        Brand: "Marlboro Mainline Non-Menthol",
        Packings: [
          {
            UPC: "028200009487",
            SuppressedUPC: "02894827",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200194800",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "45616860-AEB3-E711-80EE-6EAE8B4B5A8B",
        SKUName: "MARL BLACK LABEL BOX",
        Brand: "Marlboro Black Non-Menthol",
        Packings: [
          {
            UPC: "028200328311",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200328328",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "11A86CA4-2411-E111-97F9-001517C5D911",
        SKUName: "Marlboro NXT King Box",
        Brand: "Marlboro Black Menthol",
        Packings: [
          {
            UPC: "028200317728",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200317711",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "61047B12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Southern Cut King Box",
        Brand: "Marlboro Mainline Non-Menthol",
        Packings: [
          {
            UPC: "028200004246",
            SuppressedUPC: "02842426",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200142405",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "BDD3FF4B-5436-E911-8104-6EAE8B4B5A8B",
        SKUName: "MARL MENTHOL SMOOTH ICE BOX",
        Brand: "Marlboro Mainline Menthol",
        Packings: [
          {
            UPC: "028200330611",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200330628",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "47144883-1025-E711-80E5-6EAE8B4B5A8B",
        SKUName: "MARL MENTHOL BLACK 72MM BOX",
        Brand: "Marlboro 72s Menthol",
        Packings: [
          {
            UPC: "028200193506",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200009357",
            SuppressedUPC: "02893527",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "E2534412-86F7-E011-A5EF-001517C5D911",
        SKUName: "L&M 100 Box",
        Brand: "L&M",
        Packings: [
          {
            UPC: "028200309921",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200309914",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "0C544412-86F7-E011-A5EF-001517C5D911",
        SKUName: "L&M 100 Men Box",
        Brand: "L&M",
        Packings: [
          {
            UPC: "028200310415",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200310422",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "932B4137-D29B-E311-AC84-001517C5D911",
        SKUName: "MARL MENTHOL SLATE BOX",
        Brand: "Marlboro Black Menthol",
        Packings: [
          {
            UPC: "028200324214",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200324221",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "CFF67A12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Red Label King Box",
        Brand: "Marlboro Red Label",
        Packings: [
          {
            UPC: "028200136800",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200003683",
            SuppressedUPC: "02836823",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "E51E9512-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Menthol Black Spcl Blend 100 B",
        Brand: "Marlboro Black Menthol",
        Packings: [
          {
            UPC: "028200196408",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200009647",
            SuppressedUPC: "02896427",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "5D0F7B12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marl Silver Pk 100 Bx",
        Brand: "Marlboro Mainline Non-Menthol",
        Packings: [
          {
            UPC: "028200147806",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200004789",
            SuppressedUPC: "02847829",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "0E4F4412-86F7-E011-A5EF-001517C5D911",
        SKUName: "L&M King Box",
        Brand: "L&M",
        Packings: [
          {
            UPC: "028200309822",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200309815",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "A6097B12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Blue 100 Men Box",
        Brand: "Marlboro Mainline Menthol",
        Packings: [
          {
            UPC: "028200137708",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200003775",
            SuppressedUPC: "02837725",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "6D2A9512-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Silver 72mm Box",
        Brand: "Marlboro 72s Non-Menthol",
        Packings: [
          {
            UPC: "028200003867",
            SuppressedUPC: "02838627",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200138606",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "A3EE7A12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Silver King Men Box",
        Brand: "Marlboro Mainline Menthol",
        Packings: [
          {
            UPC: "028200004819",
            SuppressedUPC: "02848129",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200148100",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "E7F97A12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Spcl Select Gold King Box",
        Brand: "Marlboro Special Select",
        Packings: [
          {
            UPC: "028200004222",
            SuppressedUPC: "02842222",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200142207",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "F8CF6012-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro King Soft",
        Brand: "Marlboro Mainline Non-Menthol",
        Packings: [
          {
            UPC: "028200003584",
            SuppressedUPC: "02835824",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200135803",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "CB209512-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Green 72mm Men Box",
        Brand: "Marlboro 72s Menthol",
        Packings: [
          {
            UPC: "028200196200",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200009623",
            SuppressedUPC: "02896223",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "6F289512-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Gold 72mm Box",
        Brand: "Marlboro 72s Non-Menthol",
        Packings: [
          {
            UPC: "028200196507",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200009654",
            SuppressedUPC: "02896524",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "82D06012-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro King Box",
        Brand: "Marlboro Mainline Non-Menthol",
        Packings: [
          {
            UPC: "028200003577",
            SuppressedUPC: "02835727",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200135704",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "2F37A381-1875-ED11-AC20-14CB65725109",
        SKUName: "MARL BLACK GOLD PACK BOX",
        Brand: "Marlboro Black Non-Menthol",
        Packings: [
          {
            UPC: "028200334817",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200179319",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "Y",
          },
          {
            UPC: "028200609311",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "Y",
          },
          {
            UPC: "028200008879",
            SuppressedUPC: "02888729",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "6CD16012-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro King Box 25s",
        Brand: "Marlboro Mainline Non-Menthol",
        Packings: [
          {
            UPC: "028200135506",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200003553",
            SuppressedUPC: "02835523",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "15147B12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Spcl Select Gold 100 Box",
        Brand: "Marlboro Special Select",
        Packings: [
          {
            UPC: "028200142306",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200004239",
            SuppressedUPC: "02842329",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "E581B97F-D31A-E911-8102-6EAE8B4B5A8B",
        SKUName: "CHESTERFIELD BLUE 100 BOX",
        Brand: "Chesterfield",
        Packings: [
          {
            UPC: "028200330819",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200330826",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "EDFF7A12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Midnight King Men Box",
        Brand: "Marlboro Black Menthol",
        Packings: [
          {
            UPC: "028200161307",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200006134",
            SuppressedUPC: "02861324",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "4D137B12-86F7-E011-A5EF-001517C5D911",
        SKUName: "Marlboro Gold 100 Men Soft",
        Brand: "Marlboro Mainline Menthol",
        Packings: [
          {
            UPC: "028200003737",
            SuppressedUPC: "02837327",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200137302",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "413A22BF-6EB1-E111-83DA-001517C5DB15",
        SKUName: "Marlboro Edge King Box",
        Brand: "Marlboro Black Non-Menthol",
        Packings: [
          {
            UPC: "028200319913",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200319920",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
        ],
      },
      {
        SKUGUID: "8E534412-86F7-E011-A5EF-001517C5D911",
        SKUName: "L&M Turkish Blend King Box",
        Brand: "L&M",
        Packings: [
          {
            UPC: "028200313928",
            SuppressedUPC: "N/A",
            UOM: "PACK",
            ConversionFactor: 1,
            IsPromotionalUPC: "N",
          },
          {
            UPC: "028200313911",
            SuppressedUPC: "N/A",
            UOM: "CARTON",
            ConversionFactor: 10,
            IsPromotionalUPC: "N",
          },
        ],
      },
    ],
    LoyaltyAllowances: [
      {
        AllowanceType: "Loyalty Fund Allowances",
        RCN: ["125732"],
        SKUGUID: [
          "11A86CA4-2411-E111-97F9-001517C5D911",
          "13047B12-86F7-E011-A5EF-001517C5D911",
          "15147B12-86F7-E011-A5EF-001517C5D911",
          "1F017B12-86F7-E011-A5EF-001517C5D911",
          "1FE26012-86F7-E011-A5EF-001517C5D911",
          "2D37A381-1875-ED11-AC20-14CB65725109",
          "2F37A381-1875-ED11-AC20-14CB65725109",
          "413A22BF-6EB1-E111-83DA-001517C5DB15",
          "45127B12-86F7-E011-A5EF-001517C5D911",
          "45616860-AEB3-E711-80EE-6EAE8B4B5A8B",
          "47144883-1025-E711-80E5-6EAE8B4B5A8B",
          "47FA7A12-86F7-E011-A5EF-001517C5D911",
          "4BF97A12-86F7-E011-A5EF-001517C5D911",
          "4D137B12-86F7-E011-A5EF-001517C5D911",
          "5D0F7B12-86F7-E011-A5EF-001517C5D911",
          "60077B12-86F7-E011-A5EF-001517C5D911",
          "61047B12-86F7-E011-A5EF-001517C5D911",
          "62087B12-86F7-E011-A5EF-001517C5D911",
          "65E46012-86F7-E011-A5EF-001517C5D911",
          "65F07A12-86F7-E011-A5EF-001517C5D911",
          "68D56012-86F7-E011-A5EF-001517C5D911",
          "6CD16012-86F7-E011-A5EF-001517C5D911",
          //  "6D0E7B12-86F7-E011-A5EF-001517C5D911",
          "6D2A9512-86F7-E011-A5EF-001517C5D911",
          "6DA57E51-CE88-E911-8108-6EAE8B4B5A8B",
          "6F289512-86F7-E011-A5EF-001517C5D911",
          "82D06012-86F7-E011-A5EF-001517C5D911",
          "871C9512-86F7-E011-A5EF-001517C5D911",
          "8D3562B6-384F-E111-A424-001517C5DB15",
          "902B4137-D29B-E311-AC84-001517C5D911",
          "932B4137-D29B-E311-AC84-001517C5D911",
          "9B037B12-86F7-E011-A5EF-001517C5D911",
          "9F0C7B12-86F7-E011-A5EF-001517C5D911",
          "A0D96012-86F7-E011-A5EF-001517C5D911",
          "A1137B12-86F7-E011-A5EF-001517C5D911",
          "A1FA7A12-86F7-E011-A5EF-001517C5D911",
          "A3EE7A12-86F7-E011-A5EF-001517C5D911",
          "A6097B12-86F7-E011-A5EF-001517C5D911",
          "A9E26012-86F7-E011-A5EF-001517C5D911",
          "AA0825F4-D7D2-EA11-9B05-0003FFE49879",
          "AD0D7B12-86F7-E011-A5EF-001517C5D911",
          "B00825F4-D7D2-EA11-9B05-0003FFE49879",
          "BDD3FF4B-5436-E911-8104-6EAE8B4B5A8B",
          "C90C7B12-86F7-E011-A5EF-001517C5D911",
          "CB209512-86F7-E011-A5EF-001517C5D911",
          "CFF67A12-86F7-E011-A5EF-001517C5D911",
          "DC2FB349-44A5-EA11-8118-6EAE8B4B5A8B",
          "DD1D9512-86F7-E011-A5EF-001517C5D911",
          "E51E9512-86F7-E011-A5EF-001517C5D911",
          "E7F97A12-86F7-E011-A5EF-001517C5D911",
          "ED259512-86F7-E011-A5EF-001517C5D911",
          "EDFF7A12-86F7-E011-A5EF-001517C5D911",
          "EF2FB349-44A5-EA11-8118-6EAE8B4B5A8B",
          "F0077B12-86F7-E011-A5EF-001517C5D911",
          "F8CF6012-86F7-E011-A5EF-001517C5D911",
        ],
        EligibleUOM: ["CARTON", "PACK"],
        MinimumQuantity: 2,
        MaximumAllowancePerTransaction: 1.5,
        MaximumDailyTransactionsPerLoyalty: 5,
        ManufacturerFundedAmount: 1.5,
        LoyaltyFundPromotionCode: "28200197214",
        Allowances: [
          {
            Currency: "USD",
            Amount: 1.5,
            StartDate: "2024-02-25",
            EndDate: "2024-03-30",
            ChangeFromPriorPeriod: 0.0,
          },
        ],
      },
    ],
  },
];
//For your convenience, loyaltyData and productsData are added as json files in file explorer. They will not be used in the current file.

//HW: implement a loyalty flow to add loyalty discounts on qualifying transactions.
//Hint: find out what counts as a qualifying transaction by looking at:
//  loyaltyData[0].LoyaltyAllowances[0].MaximumAllowancePerTransaction,
//  loyaltyData[0].LoyaltyAllowances[0].MinimumQuantity,
//  loyaltyData[0].LoyaltyAllowances[0].Allowances[0].Amount
//  loyaltyData[0].LoyaltyAllowances[0].SKUGUID
//note: since a CARTON is 10 PACKS, 1 carton should be enough to trigger the loyalty discount

//bonus: try implmenting Marlboro Multi-pack found in productsData[0].OtherAllowances! Unlike loyalty discounts, Multi-pack discounts are NOT limited to 1 per transaction.
function addLoyalty() {
  // Read value from text input
  const loyaltyID = document
    .querySelector(".loyalty-id-input input")
    .value.trim();
  //Check if ID is "valid"
  if (loyaltyID != null) {
    console.log("Loyalty ID accepted! ID: ", loyaltyID);
  } else {
    console.log("Please enter valid Loyalty ID!");
    return;
  }

  // Loyalty Discount tracker
  var loyaltyDiscount = 0;
  // Check if Items in cart are eligible for loyalty discounts
  for (const cartItem of shoppingCart) {
    for (const product of loyaltyData[0].Products) {
      for (const packing of product.Packings) {
        //  console.log(product.SKUGUID);
        if (packing.UPC == cartItem.UPC) {
          // console.log(product.SKUGUID, cartItem.UPC, packing.UOM);
          if (
            loyaltyData[0].LoyaltyAllowances[0].SKUGUID.includes(
              product.SKUGUID
            )
          ) {
            console.log("Cart Item UPC: ", cartItem.UPC, packing.UOM);
            // check minimum QTY Eligibility
            if (
              cartItem.qty >=
                loyaltyData[0].LoyaltyAllowances[0].MinimumQuantity ||
              packing.UOM == "CARTON"
            ) {
              loyaltyDiscount =
                loyaltyDiscount +
                loyaltyData[0].LoyaltyAllowances[0].Allowances[0].Amount;
              console.log("Loyalty Discount: ", loyaltyDiscount);
            } else {
              console.log("Minimum QTY not met for Loyalty Discount.");
            }
          }
        }
      }
    }
  }
  // Check for max Loyalty Discount
  if (
    loyaltyDiscount >
    loyaltyData[0].LoyaltyAllowances[0].MaximumAllowancePerTransaction
  ) {
    loyaltyDiscount =
      loyaltyData[0].LoyaltyAllowances[0].MaximumAllowancePerTransaction;
  }
  console.log("Total loaylty Discount: ", loyaltyDiscount);
  return loyaltyDiscount;
}

// Add product to shopping cart
function addProduct() {
  const upcInput = document.querySelector(".product-inputs input").value.trim();
  //if (!upcInput) return;

  const product = findProductByUPC(upcInput);
  if (!product) {
    alert("Product not found");
    return;
  }

  addToCart(product, upcInput);
  document.querySelector(".product-inputs input").value = "";
}

// Find product by UPC
function findProductByUPC(upc) {
  for (const product of productsData[0].Products) {
    for (const packing of product.Packings) {
      if (packing.UPC === upc) {
        return {
          ...product,
          UOM: packing.UOM,
          ConversionFactor: packing.ConversionFactor,
        };
      }
    }
  }
  return null;
}

// Add product to cart and update UI
let shoppingCart = [];

function addToCart(product, upc) {
  const existingItem = shoppingCart.find((item) => item.UPC === upc);
  if (existingItem) {
    existingItem.qty += 1;
  } else {
    shoppingCart.push({
      UPC: upc,
      name: `${product.SKUName} (${product.UOM})`,
      qty: 1,
      price: getPriceForUPC(product.SKUGUID, product.ConversionFactor) || 0,
    });
  }
  updateCartUI();
}

//Get price for a product SKUGUID
function getPriceForUPC(skuguid, conversionFactor) {
  for (const allowance of productsData[0].PerUnitAllowances || []) {
    if (allowance.SKUGUID.includes(skuguid)) {
      const maxPrice = allowance.Allowances[0].MaxSuggestedRetailSellingPrice;
      console.log(maxPrice);
      if (maxPrice === undefined) {
        return 14 * conversionFactor;
      } else {
        return maxPrice * conversionFactor;
      }
    }
  }
}

// Update cart UI
function updateCartUI() {
  const cartTable = document.querySelector("#shopping-cart tbody");
  const cartTotal = document.querySelector("#total");
  let total = 0;

  cartTable.innerHTML = "";

  shoppingCart.forEach((item) => {
    const row = document.createElement("tr");
    const itemTotal = item.qty * item.price;
    total += itemTotal;
    row.innerHTML = `
              <td>${item.qty}</td>
              <td>${item.name}</td>
              <td>$${(item.qty * item.price).toFixed(2)}</td>
          `;
    cartTable.appendChild(row);
    cartTotal.innerHTML = `Total: $${total.toFixed(2)}`;
  });
}

// Expose addProduct globally so it can be accessed from the HTML button
window.addProduct = addProduct;

// Not Sure where to call the function from yet, so here is the call
//addLoyalty("12345", shoppingCart);
