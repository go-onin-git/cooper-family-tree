// Cooper Family Tree — source data
//
// Transcribed from photographed genealogy documents (typed generation lists +
// a hand-drawn descendant chart) compiled by a Cooper family member tracing
// descent from William & Susannah Cooper of Grates Cove, Newfoundland.
//
// Structure: nested "marriages" — each person can have one or more spouses,
// each spouse union has its own list of children. This mirrors how the
// original chart is drawn (couple box -> children boxes nested below).
//
// It's plain, hand-editable JS — adding, correcting, or removing a person is
// just editing an object below, then running `node data/build.js` to
// recompile data/data.json.

const familyTree = {
  name: "William Cooper",
  gender: "M",
  note: "Arrived in St. John's c.1825-1830, reportedly as a young stowaway cabin-boy; taken in by John Hoskins and settled around Trinity Bay.",
  marriages: [
    {
      spouse: { name: "Susannah Cooper", gender: "F", note: "Of Lower Island Cove. Married William Cooper Dec 6, 1841." },
      children: [
        { name: "Annanias Cooper", gender: "M", note: "Believed to have died young — no record of marriage or children found." },
        {
          name: "Darcus Cooper", gender: "F",
          marriages: [{ spouse: { name: "Josiah Janes", gender: "M" }, children: [] }]
        },
        {
          name: "Sarah Cooper", gender: "F",
          marriages: [{ spouse: { name: "Simeon Snelgrove", gender: "M" }, children: [] }]
        },
        {
          name: "Josiah Cooper", gender: "M", note: "Great-grandfather of the document's original author.",
          marriages: [
            {
              spouse: { name: "Rosannah Churchill", gender: "F" },
              children: [
                {
                  name: "William James Cooper", gender: "M",
                  marriages: [
                    {
                      spouse: { name: "Annie Churchill", gender: "F" },
                      children: [
                        { name: "Albert George Cooper", gender: "M", marriages: [{ spouse: { name: "Karen Willard", gender: "F" }, children: [
                          { name: "Winston E. Cooper", gender: "M", marriages: [{ spouse: { name: "Karen Willard", gender: "F" }, children: [
                            { name: "Kelly Marie Cooper", gender: "F" }, { name: "Penny Lynn Cooper", gender: "F" }
                          ] }] },
                          { name: "Edward J. Cooper", gender: "M", marriages: [{ spouse: { name: "Marion Large Jones", gender: "F" }, children: [
                            { name: "Kelly Roger Jones", gender: "M" }, { name: "Kurtis James Jones", gender: "M" }, { name: "Kristan Ann Jones", gender: "F" }
                          ] }] },
                          { name: "Susan G. Cooper", gender: "F", marriages: [{ spouse: { name: "Robert S. Goodchild", gender: "M" }, children: [
                            { name: "Robert Jason Goodchild", gender: "M" }, { name: "Kevin James Goodchild", gender: "M" }
                          ] }] },
                          { name: "A. Wilson Cooper", gender: "M", marriages: [{ spouse: { name: "Evelyn Jean McLean", gender: "F" }, children: [
                            { name: "Eric David Cooper", gender: "M", marriages: [{ spouse: { name: "Karla Ann McAlpine", gender: "F" }, children: [] }] }
                          ] }] },
                          { name: "Gary Russell Cooper", gender: "M", marriages: [{ spouse: { name: "Margaret Docherty", gender: "F" }, children: [
                            { name: "Brandon Cooper", gender: "M" }
                          ] }, { spouse: { name: "Laura MacLean", gender: "F" }, children: [
                            { name: "Shannon Jean Christa Cooper", gender: "F" }, { name: "Ryan Norman Albert Cooper", gender: "M" }
                          ] }] }
                        ] }] },
                        { name: "Ralph Thomas Cooper", gender: "M", marriages: [{ spouse: { name: "Lillian Avery", gender: "F" }, children: [
                          { name: "Peggy Cooper", gender: "F", marriages: [{ spouse: { name: "Barry Slater", gender: "M" }, children: [
                            { name: "Allison Jane Slater", gender: "F" }, { name: "Benjamin Andrew Slater", gender: "M" }
                          ] }] },
                          { name: "Jeffrey Cooper", gender: "M", marriages: [{ spouse: { name: "Susan Mariutti", gender: "F" }, children: [] }] },
                          { name: "Albert Wayne Cooper", gender: "M", marriages: [{ spouse: { name: "Corinne LeBlanc", gender: "F", note: "Handwritten addition on original document." }, children: [] }] },
                          { name: "Wallace Christie Cooper", gender: "M" }
                        ] }] },
                        { name: "Wallace Christie Cooper", gender: "M" },
                        { name: "Wilson Cooper", gender: "M", marriages: [{ spouse: { name: "Blanche Piercey", gender: "F" }, children: [
                          { name: "Absalom James Cooper", gender: "M" }
                        ] }] },
                        { name: "Jemima Cooper", gender: "F" },
                        { name: "Gladys Cooper", gender: "F", marriages: [{ spouse: { name: "Herman Haines", gender: "M" }, children: [
                          { name: "Kenneth Haines", gender: "M", marriages: [{ spouse: { name: "Linda Morrell", gender: "F" }, children: [
                            { name: "Paula Haines", gender: "F" }, { name: "Peter Haines", gender: "M" }, { name: "Robert Haines", gender: "M" }
                          ] }] },
                          { name: "June Haines", gender: "F", marriages: [{ spouse: { name: "Donald Riggs", gender: "M" }, children: [
                            { name: "Matthew Riggs", gender: "M" }, { name: "Courtney Riggs", gender: "F" }
                          ] }] },
                          { name: "Ruth Haines", gender: "F" }
                        ] }] },
                        { name: "Absalom James Cooper", gender: "M" },
                        { name: "Lillian Cooper", gender: "F" },
                        { name: "Rowena Cooper", gender: "F", marriages: [{ spouse: { name: "Wallace MacIsaac", gender: "M" }, children: [
                          { name: "W. James MacIsaac", gender: "M", marriages: [{ spouse: { name: "Betty Hynes", gender: "F" }, children: [
                            { name: "Libbie Ann MacIsaac", gender: "F" }, { name: "Patti Lynn MacIsaac", gender: "F" }
                          ] }] },
                          { name: "Hughie J. MacIsaac", gender: "M", marriages: [{ spouse: { name: "Margaret Francis", gender: "F" }, children: [
                            { name: "Catherine Ann MacIsaac", gender: "F" }, { name: "William Keith MacIsaac", gender: "M" }
                          ] }] },
                          { name: "Catherine Ann MacIsaac", gender: "F" },
                          { name: "William Keith MacIsaac", gender: "M" },
                          { name: "Effie Cooper", gender: "F", marriages: [{ spouse: { name: "Alec Strong", gender: "M" }, children: [
                            { name: "Rowena Strong", gender: "F", marriages: [{ spouse: { name: "Ivan Hynes", gender: "M" }, children: [
                              { name: "Debbie Hynes", gender: "F", marriages: [{ spouse: { name: "James Blackwood", gender: "M" }, children: [
                                { name: "Jamie Blackwood", gender: "M" }, { name: "Jillian Blackwood", gender: "F" }
                              ] }] },
                              { name: "David Hynes", gender: "M", marriages: [{ spouse: { name: "Wanda Blundon", gender: "F" }, children: [
                                { name: "Christopher Hynes", gender: "M" }, { name: "Micheal Hynes", gender: "M" }, { name: "Megan Hynes", gender: "F" }, { name: "Mitchell Hynes", gender: "M" }
                              ] }] },
                              { name: "Denise Hynes", gender: "F", children: [ { name: "Devon Hynes", gender: "M" } ] },
                              { name: "Diane Hynes", gender: "F", children: [ { name: "Jonathon Hynes", gender: "M" }, { name: "Joshua Hynes", gender: "M" } ] }
                            ] }] }
                          ] }] }
                        ] }] },
                        { name: "Florence Cooper", gender: "F", marriages: [{ spouse: { name: "Everett Ploughman", gender: "M" }, children: [
                          { name: "Reginald Ploughman", gender: "M", marriages: [{ spouse: { name: "Rozanne Stein", gender: "F" }, children: [
                            { name: "Robbie Ploughman", gender: "M" }, { name: "Paul Ploughman", gender: "M" }
                          ] }] },
                          { name: "Vanda Ploughman", gender: "F", marriages: [{ spouse: { name: "Dennis LeDrew", gender: "M" }, children: [
                            { name: "Danielle LeDrew", gender: "F" }, { name: "Renee LeDrew", gender: "F" }
                          ] }] },
                          { name: "James Cooper", gender: "M", marriages: [{ spouse: { name: "Margaret O'Neill", gender: "F" }, children: [
                            { name: "Florence Cooper", gender: "F", marriages: [{ spouse: { name: "Frederick Colbourne", gender: "M" }, children: [
                              { name: "Tina Colbourne", gender: "F", marriages: [{ spouse: { name: "Trevor Martin", gender: "M" }, children: [
                                { name: "Kerrie Nicole Martin", gender: "F" }
                              ] }] },
                              { name: "Frederick Colbourne Jr.", gender: "M" }
                            ] }] },
                            { name: "Shirley Cooper", gender: "F", marriages: [{ spouse: { name: "Callitus Greene", gender: "M" }, children: [
                              { name: "Laurie Greene", gender: "F" }, { name: "Robert Greene", gender: "M" }
                            ] }] },
                            { name: "Joseph Cooper", gender: "M", marriages: [{ spouse: { name: "Dorothy Parsons", gender: "F" }, children: [
                              { name: "Curtis Cooper", gender: "M" }, { name: "Scott Cooper", gender: "M" }
                            ] }] },
                            { name: "Helen Cooper", gender: "F", marriages: [{ spouse: { name: "Edward Butt", gender: "M" }, children: [
                              { name: "Lisa Butt", gender: "F" }, { name: "Damien Butt", gender: "M" }
                            ] }] },
                            { name: "Madonna Cooper", gender: "F", marriages: [{ spouse: { name: "Ronald Sullivan", gender: "M" }, children: [
                              { name: "Keith Sullivan", gender: "M" }, { name: "Barry Sullivan", gender: "M" }
                            ] }] },
                            { name: "James Cooper Jr.", gender: "M", marriages: [{ spouse: { name: "Mary Jo Brito", gender: "F" }, children: [
                              { name: "Jimmy Cooper", gender: "M" }, { name: "Vanessa Cooper", gender: "F" }
                            ] }] },
                            { name: "Rowena Cooper", gender: "F", marriages: [{ spouse: { name: "Jerome Wrice", gender: "M" }, children: [
                              { name: "Tammy Wrice", gender: "F" }, { name: "Jerry Wrice", gender: "M" }
                            ] }] },
                            { name: "Eileen Cooper", gender: "F", marriages: [{ spouse: { name: "Ryan Heron", gender: "M" }, children: [
                              { name: "Robert Heron", gender: "M" }, { name: "Jason Heron", gender: "M" }
                            ] }] },
                            { name: "Francis Cooper", gender: "M", marriages: [
                              { spouse: { name: "Sharon Cole", gender: "F" }, children: [
                                { name: "Kimberly Cooper", gender: "F" }, { name: "Michelle Cooper", gender: "F" }
                              ] },
                              { spouse: { name: "Darlene Porter", gender: "F" }, children: [
                                { name: "Robyn Porter", gender: "F" }
                              ] }
                            ] },
                            { name: "Josiah Cooper", gender: "M" },
                            { name: "Reane Mabel Cooper", gender: "F" },
                            { name: "Winnie Cooper", gender: "F" },
                            { name: "Max Cooper", gender: "M" }
                          ] }] }
                        ] }] }
                      ]
                    },
                    {
                      spouse: { name: "Hannah Maria Cram", gender: "F" },
                      children: [
                        { name: "Annie May Cooper", gender: "F" },
                        { name: "Jennie Cooper", gender: "F" },
                        { name: "Arthur Clifford Cooper", gender: "M" },
                        { name: "Joseph Cooper", gender: "M" }
                      ]
                    }
                  ]
                },
                {
                  name: "Mary Susannah Cooper", gender: "F",
                  marriages: [{ spouse: { name: "Obeniah Benson", gender: "M" }, children: [] }]
                },
                {
                  name: "Abel Churchill Cooper", gender: "M",
                  marriages: [{
                    spouse: { name: "Laura Jane Martin", gender: "F" },
                    children: [
                      { name: "Edwin Cooper", gender: "M", marriages: [{ spouse: { name: "Florence White", gender: "F" }, children: [
                        { name: "Edwin Cooper Jr.", gender: "M", marriages: [{ spouse: { name: "Patricia Vanderkraag", gender: "F" }, children: [
                          { name: "Daniel Cooper", gender: "M" }, { name: "David Joseph Cooper", gender: "M" }
                        ] }] }
                      ] }] },
                      { name: "Beatrice Cooper", gender: "F", marriages: [{ spouse: { name: "Herb Foster", gender: "M" }, children: [
                        { name: "Erwin Foster", gender: "M", marriages: [{ spouse: { name: "Sharon Duhaill", gender: "F" }, children: [
                          { name: "Breck Foster", gender: "M" }, { name: "Bradley Foster", gender: "M" }, { name: "Natalie Foster", gender: "F" }, { name: "Dexter Foster", gender: "M" }
                        ] }] },
                        { name: "Kenneth Foster", gender: "M", marriages: [{ spouse: { name: "Betty Boone", gender: "F" }, children: [
                          { name: "Cheryl Foster", gender: "F" }, { name: "Shane Foster", gender: "M" }
                        ] }] },
                        { name: "Gary Foster", gender: "M", marriages: [{ spouse: { name: "Patricia Boone", gender: "F" }, children: [
                          { name: "Tammy Foster", gender: "F" }, { name: "Jonathan Foster", gender: "M" }
                        ] }] },
                        { name: "Rodney Wilson Foster", gender: "M", marriages: [{ spouse: { name: "Karen Theresa Pushie", gender: "F" }, children: [
                          { name: "Theresa Faye Anne Foster", gender: "F" }
                        ] }] },
                        { name: "Shirley Foster", gender: "F", marriages: [{ spouse: { name: "Brian Pushie", gender: "M" }, children: [
                          { name: "Cindy Pushie", gender: "F" }
                        ] }] }
                      ] }] },
                      { name: "Gertrude Cooper", gender: "F", marriages: [{ spouse: { name: "Bill Snelgrove", gender: "M" }, children: [
                        { name: "Frank Snelgrove", gender: "M", marriages: [{ spouse: { name: "Barbara Walsh", gender: "F" }, children: [] }] },
                        { name: "Gregory Snelgrove", gender: "M", marriages: [{ spouse: { name: "Kathy LeClerc", gender: "F" }, children: [
                          { name: "Sean William Snelgrove", gender: "M" }
                        ] }] },
                        { name: "Barbara Snelgrove", gender: "F", marriages: [{ spouse: { name: "Ben Blonski", gender: "M" }, children: [
                          { name: "Brian John Blonski", gender: "M" }, { name: "Laurie Christine Blonski", gender: "F", marriages: [{ spouse: { name: "Deana Isla", gender: "F" }, children: [
                            { name: "Zackary Isla", gender: "M" }
                          ] }] }
                        ] }] },
                        { name: "Darren Snelgrove", gender: "M" }
                      ] }] },
                      { name: "Stella Cooper", gender: "F", marriages: [{ spouse: { name: "Dolph Benson", gender: "M" }, children: [
                        { name: "Alan Ralph Benson", gender: "M", marriages: [{ spouse: { name: "Leona Richardson", gender: "F" }, children: [
                          { name: "Robert Alan Richardson", gender: "M" }
                        ] }] },
                        { name: "Barbara Benson", gender: "F", marriages: [{ spouse: { name: "Edward Newhook", gender: "M" }, children: [
                          { name: "Jordan Edward Roy Newhook", gender: "M", note: "Adopted" }
                        ] }] },
                        { name: "Suzanne Benson", gender: "F", marriages: [{ spouse: { name: "Keith Furlong", gender: "M" }, children: [
                          { name: "Brandon Furlong", gender: "M" }, { name: "Amanda Furlong", gender: "F" }
                        ] }] }
                      ] }] },
                      { name: "Bertha Cooper", gender: "F", marriages: [{ spouse: { name: "Tom Shields", gender: "M" }, children: [
                        { name: "Robert Shields", gender: "M", marriages: [{ spouse: { name: "Margaret Yurne", gender: "F" }, children: [
                          { name: "Jeffrey Shields", gender: "M" }, { name: "Andrea Shields", gender: "F" }, { name: "Carolyn Shields", gender: "F" }
                        ] }] },
                        { name: "Alan Shields", gender: "M", marriages: [{ spouse: { name: "Lloydann Koller", gender: "F" }, children: [
                          { name: "Christine Shields", gender: "F" }, { name: "Ronald Shields", gender: "M" }, { name: "Kenneth B. Shields", gender: "M" }
                        ] }] }
                      ] }] },
                      { name: "Ethel Cooper", gender: "F", marriages: [{ spouse: { name: "Alan Freake", gender: "M" }, children: [
                        { name: "Alan Freake Jr.", gender: "M", marriages: [{ spouse: { name: "Grace Crooks", gender: "F" }, children: [
                          { name: "Alan Freake III", gender: "M", marriages: [{ spouse: { name: "Brenda Finley", gender: "F" }, children: [
                            { name: "Alan Freake IV", gender: "M" }
                          ] }] }
                        ] }] },
                        { name: "Laura Freake", gender: "F", marriages: [{ spouse: { name: "Ross DiSilva", gender: "F" }, children: [
                          { name: "Cindy DiSilva", gender: "F" }, { name: "Daniel DiSilva", gender: "M" }, { name: "Dennis DiSilva", gender: "M" }, { name: "Philip DiSilva", gender: "M" }
                        ] }] },
                        { name: "Brenda Freake", gender: "F", marriages: [{ spouse: { name: "David Zwicker", gender: "M" }, children: [
                          { name: "Timothy Zwicker", gender: "M" }
                        ] }] },
                        { name: "Steven Freake", gender: "M" },
                        { name: "James Freake", gender: "M" }
                      ] }] },
                      { name: "Laura Thistle", gender: "F", marriages: [{ spouse: { name: "Rex Clarke", gender: "M" }, children: [
                        { name: "A. Sandy Clarke", gender: "M", marriages: [{ spouse: { name: "Heather Rodway", gender: "F" }, children: [
                          { name: "Alexander Sandy Clarke Jr.", gender: "M" }, { name: "Stephanie Clarke", gender: "F" }, { name: "Andrew Clarke", gender: "M" }
                        ] }] },
                        { name: "Susan Clarke", gender: "F", marriages: [{ spouse: { name: "Darren Carl Martin", gender: "M" }, children: [] }] },
                        { name: "Vernon Clarke", gender: "M" }
                      ] }] },
                      { name: "Susannah Cooper", gender: "F", marriages: [{ spouse: { name: "Roy Mercer", gender: "M" }, children: [] }] }
                    ]
                  }]
                },
                { name: "Jabez Cooper", gender: "M", note: "No spouse or descendants found in source." },
                {
                  name: "Absalom John Cooper", gender: "M",
                  marriages: [{
                    spouse: { name: "Laura Curtis", gender: "F" },
                    children: [
                      { name: "Jenona Cooper", gender: "F", marriages: [{ spouse: { name: "John Ingvalud Avery", gender: "M" }, children: [
                        { name: "Jonah Wilson Avery", gender: "M", marriages: [{ spouse: { name: "Marilyn Dale", gender: "F" }, children: [
                          { name: "Peter Dale Avery", gender: "M" }, { name: "Roger Anthony Avery", gender: "M", marriages: [{ spouse: { name: "Andrea Gunlan", gender: "F" }, children: [] }] }, { name: "Christie Marie Avery", gender: "F" }
                        ] }] },
                        { name: "Herman Douglas Avery", gender: "M", marriages: [{ spouse: { name: "Mary Roberts", gender: "F" }, children: [
                          { name: "Robert Sidney Avery", gender: "M" }, { name: "John Aaron Avery", gender: "M" }
                        ] }] },
                        { name: "Gladys Sharon Avery", gender: "F", marriages: [{ spouse: { name: "Lewis Barrett", gender: "M" }, children: [
                          { name: "Kristopher Lewis Barrett", gender: "M" }, { name: "Karen Melissa Barrett", gender: "F" }, { name: "John Avery Barrett", gender: "M" }
                        ] }] }
                      ] }] },
                      { name: "Gladys Cooper", gender: "F" }
                    ]
                  }]
                },
                {
                  name: "Thomas Cooper", gender: "M",
                  marriages: [
                    {
                      spouse: { name: "Charlotte Beatrice Martin", gender: "F" },
                      children: [
                        { name: "Marie Cooper", gender: "F", marriages: [{ spouse: { name: "Robert S. White", gender: "M" }, children: [] }] },
                        { name: "Beatrice Cooper", gender: "F" },
                        { name: "Charles Cooper", gender: "M" },
                        { name: "John Cooper", gender: "M" },
                        {
                          name: "Mabel Cooper", gender: "F",
                          marriages: [{ spouse: { name: "George Timms", gender: "M" }, children: [
                            { name: "George E. Timms Jr.", gender: "M", marriages: [{ spouse: { name: "Linda St. Pierre", gender: "F" }, children: [
                              { name: "Anna Maria Timms", gender: "F" }, { name: "Lisa Michelle Timms", gender: "F" }
                            ] }] },
                            { name: "Joseph Victor Timms", gender: "M", marriages: [{ spouse: { name: "Carol Cunningham", gender: "F" }, children: [
                              { name: "John Timms", gender: "M" }, { name: "David Timms", gender: "M" }, { name: "Joseph Timms Jr.", gender: "M" }
                            ] }] },
                            { name: "Barbara Ann Timms", gender: "F", marriages: [{ spouse: { name: "James William Ward", gender: "M" }, children: [
                              { name: "Jeremy James Ward", gender: "M" }, { name: "Mark Allan Ward", gender: "M" }, { name: "Valerie Leanne Ward", gender: "F" }
                            ] }] },
                            { name: "Marie Alice Timms", gender: "F", marriages: [{ spouse: { name: "David Brian Giannini", gender: "M" }, children: [
                              { name: "Michael Ryan Giannini", gender: "M" }, { name: "Bradley George Giannini", gender: "M" }
                            ] }] }
                          ] }]
                        },
                        {
                          name: "Johnnie Cooper", gender: "F",
                          marriages: [{ spouse: { name: "William Jones Rogers", gender: "M" }, children: [
                            { name: "Arthur Roy Rogers", gender: "M", marriages: [{ spouse: { name: "Karen Timbrell", gender: "F" }, children: [
                              { name: "Danny Howard Rogers", gender: "M" }, { name: "Trevor Roy Rogers", gender: "M" }
                            ] }] },
                            { name: "Vicky-Lynn C. Rogers", gender: "F", marriages: [{ spouse: { name: "Wilfred Albert Kelly", gender: "M" }, children: [
                              { name: "Joshua James Kelly", gender: "M" }, { name: "Chase Brian Kelly", gender: "M" }
                            ] }] },
                            { name: "Carolyn J.J. Rogers", gender: "F", marriages: [{ spouse: { name: "Charles Penzes", gender: "M" }, children: [
                              { name: "Jocelyn Margaret Violet Penzes", gender: "F" }, { name: "Justin Charles Roy Penzes", gender: "M" }
                            ] }] },
                            { name: "William James Rogers", gender: "M", marriages: [{ spouse: { name: "April Dale Lee", gender: "F" }, children: [
                              { name: "Danny Paul Rogers", gender: "M" }, { name: "William James Rogers Jr.", gender: "M" }, { name: "Jennifer Mae Rogers", gender: "F" }
                            ] }] },
                            { name: "Danny Howard Rogers", gender: "M" },
                            { name: "Trevor Roy Rogers", gender: "M" },
                            { name: "Danny Paul Rogers", gender: "M" },
                            { name: "Jennifer Mae Rogers", gender: "F" }
                          ] }]
                        },
                        {
                          name: "A. Clifford Cooper", gender: "M",
                          marriages: [{ spouse: { name: "Eva Faulkner", gender: "F" }, children: [
                            { name: "Beverly C. Cooper", gender: "F", marriages: [{ spouse: { name: "Sharon E. Brian Erb", gender: "F" }, children: [
                              { name: "Shervyn Clifford Cooper", gender: "M" }, { name: "Zicora Elizabeth Cooper", gender: "F" }
                            ] }] },
                            { name: "M. Marion Jane Cooper", gender: "F", marriages: [{ spouse: { name: "William Fitwir III", gender: "M" }, children: [
                              { name: "Sandra Gail Hamilton", gender: "F", marriages: [{ spouse: { name: "William VanderLeest", gender: "M" }, children: [
                                { name: "Marion Amanda VanderLeest", gender: "F" }, { name: "Corrine Lee VanderLeest", gender: "F" }
                              ] }] },
                              { name: "Linda L. Hamilton", gender: "F", marriages: [{ spouse: { name: "James Daniel Bannon", gender: "M" }, children: [
                                { name: "Tamara June Bannon", gender: "F" }
                              ] }] },
                              { name: "William A. Hamilton", gender: "M", marriages: [{ spouse: { name: "Lydia Nauia", gender: "F" }, children: [] }] }
                            ] }] },
                            { name: "Marion Jane Cooper", gender: "F", marriages: [{ spouse: { name: "Hayward Agustus Reid", gender: "M" }, children: [] }] },
                            { name: "Joseph Cooper", gender: "M", marriages: [{ spouse: { name: "Elva Dave", gender: "F" }, children: [
                              { name: "Boyd Cooper", gender: "M", marriages: [{ spouse: { name: "Lynn Fillier", gender: "F" }, children: [
                                { name: "Brenda Cooper", gender: "F" }, { name: "Byron Cooper", gender: "M" }
                              ] }] },
                              { name: "Josiah Cooper", gender: "M" },
                              { name: "Reane Mabel Cooper", gender: "F" },
                              { name: "Winnie Cooper", gender: "F" },
                              { name: "Max Cooper", gender: "M" }
                            ] }] }
                          ] }]
                        }
                      ]
                    },
                    { spouse: { name: "Florence Beatrice Sampson", gender: "F" }, children: [] }
                  ]
                },
                {
                  name: "Josiah Cooper", gender: "M", note: "A son also named Josiah, distinct from his father.",
                  marriages: [{ spouse: { name: "Susannah King", gender: "F" }, children: [] }]
                }
              ]
            },
            {
              spouse: { name: "Eliza Martin", gender: "F", note: "Josiah Cooper's second wife, per the hand-drawn chart." },
              children: [
                { name: "Thomas J. Cooper", gender: "M", marriages: [{ spouse: { name: "Barbara Benson", gender: "F" }, children: [] }] },
                { name: "Albert G. Cooper", gender: "M", marriages: [{ spouse: { name: "Mary Sutton", gender: "F" }, children: [] }] },
                { name: "James Cooper", gender: "M", note: "No spouse or descendants found in source." }
              ]
            }
          ]
        }
      ]
    }
  ]
}

module.exports = familyTree
