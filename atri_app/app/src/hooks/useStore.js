import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "Flex14": {
      "callbacks": {}
    },
    "Flex11": {
      "callbacks": {}
    },
    "Flex12": {
      "callbacks": {}
    },
    "Flex13": {
      "callbacks": {}
    },
    "Div21": {
      "callbacks": {}
    },
    "Flex18": {
      "callbacks": {}
    },
    "Div23": {
      "callbacks": {}
    },
    "Div24": {
      "callbacks": {}
    },
    "Div25": {
      "callbacks": {}
    },
    "Flex19": {
      "callbacks": {}
    },
    "Div30": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "Div31": {
      "callbacks": {}
    },
    "Div32": {
      "callbacks": {}
    },
    "Div36": {
      "callbacks": {}
    },
    "Div27": {
      "callbacks": {}
    },
    "Flex22": {
      "callbacks": {}
    },
    "Div37": {
      "callbacks": {}
    },
    "Flex23": {
      "callbacks": {}
    },
    "Div46": {
      "callbacks": {}
    },
    "Div47": {
      "callbacks": {}
    },
    "Div48": {
      "callbacks": {}
    },
    "Div49": {
      "callbacks": {}
    },
    "Div52": {
      "callbacks": {}
    },
    "Flex24": {
      "callbacks": {}
    },
    "Div64": {
      "callbacks": {}
    },
    "Div54": {
      "callbacks": {}
    },
    "Div55": {
      "callbacks": {}
    },
    "Div56": {
      "callbacks": {}
    },
    "Flex49": {
      "callbacks": {}
    },
    "Div65": {
      "callbacks": {}
    },
    "Flex33": {
      "callbacks": {}
    },
    "Div66": {
      "callbacks": {}
    },
    "Div67": {
      "callbacks": {}
    },
    "Div68": {
      "callbacks": {}
    },
    "Div69": {
      "callbacks": {}
    },
    "Flex34": {
      "callbacks": {}
    },
    "Div70": {
      "callbacks": {}
    },
    "Div72": {
      "callbacks": {}
    },
    "Flex37": {
      "callbacks": {}
    },
    "Div71": {
      "callbacks": {}
    },
    "Div74": {
      "callbacks": {}
    },
    "Flex39": {
      "callbacks": {}
    },
    "Div73": {
      "callbacks": {}
    },
    "Div94": {
      "callbacks": {}
    },
    "Div91": {
      "callbacks": {}
    },
    "Div88": {
      "callbacks": {}
    },
    "Flex53": {
      "callbacks": {}
    },
    "Div85": {
      "callbacks": {}
    },
    "Div89": {
      "callbacks": {}
    },
    "Flex54": {
      "callbacks": {}
    },
    "Div86": {
      "callbacks": {}
    },
    "Div90": {
      "callbacks": {}
    },
    "Flex55": {
      "callbacks": {}
    },
    "Div87": {
      "callbacks": {}
    },
    "Div92": {
      "callbacks": {}
    },
    "Div93": {
      "callbacks": {}
    },
    "Flex56": {
      "callbacks": {}
    },
    "Div104": {
      "callbacks": {}
    },
    "Div101": {
      "callbacks": {}
    },
    "Div98": {
      "callbacks": {}
    },
    "Flex60": {
      "callbacks": {}
    },
    "Div95": {
      "callbacks": {}
    },
    "Div99": {
      "callbacks": {}
    },
    "Flex61": {
      "callbacks": {}
    },
    "Div96": {
      "callbacks": {}
    },
    "Div100": {
      "callbacks": {}
    },
    "Flex62": {
      "callbacks": {}
    },
    "Div97": {
      "callbacks": {}
    },
    "Div102": {
      "callbacks": {}
    },
    "Div103": {
      "callbacks": {}
    },
    "Flex63": {
      "callbacks": {}
    },
    "Div115": {
      "callbacks": {}
    },
    "Flex71": {
      "callbacks": {}
    },
    "Div116": {
      "callbacks": {}
    },
    "Div117": {
      "callbacks": {}
    },
    "Div119": {
      "callbacks": {}
    },
    "Div125": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "Div124": {
      "callbacks": {}
    },
    "Div123": {
      "callbacks": {}
    },
    "Flex72": {
      "callbacks": {}
    },
    "Flex82": {
      "callbacks": {}
    },
    "Div128": {
      "callbacks": {}
    },
    "Div129": {
      "callbacks": {}
    },
    "Div130": {
      "callbacks": {}
    },
    "Flex73": {
      "callbacks": {}
    },
    "Div131": {
      "callbacks": {}
    },
    "Div132": {
      "callbacks": {}
    },
    "Div135": {
      "callbacks": {}
    },
    "Div136": {
      "callbacks": {}
    },
    "Div137": {
      "callbacks": {}
    },
    "Flex74": {
      "callbacks": {}
    },
    "Div138": {
      "callbacks": {}
    },
    "Flex75": {
      "callbacks": {}
    },
    "Div147": {
      "callbacks": {}
    },
    "Div146": {
      "callbacks": {}
    },
    "Div145": {
      "callbacks": {}
    },
    "Flex78": {
      "callbacks": {}
    },
    "Div143": {
      "callbacks": {}
    },
    "Flex77": {
      "callbacks": {}
    },
    "Flex76": {
      "callbacks": {}
    },
    "Div139": {
      "callbacks": {}
    },
    "Div141": {
      "callbacks": {}
    },
    "Div142": {
      "callbacks": {}
    },
    "Div140": {
      "callbacks": {}
    },
    "Div144": {
      "callbacks": {}
    },
    "Div156": {
      "callbacks": {}
    },
    "Div155": {
      "callbacks": {}
    },
    "Div154": {
      "callbacks": {}
    },
    "Flex81": {
      "callbacks": {}
    },
    "Div152": {
      "callbacks": {}
    },
    "Div153": {
      "callbacks": {}
    },
    "Div150": {
      "callbacks": {}
    },
    "Div148": {
      "callbacks": {}
    },
    "Div151": {
      "callbacks": {}
    },
    "Flex80": {
      "callbacks": {}
    },
    "Div149": {
      "callbacks": {}
    },
    "Flex79": {
      "callbacks": {}
    },
    "Div159": {
      "callbacks": {}
    },
    "Flex83": {
      "callbacks": {}
    },
    "Div160": {
      "callbacks": {}
    },
    "Div161": {
      "callbacks": {}
    },
    "Div162": {
      "callbacks": {}
    },
    "Flex84": {
      "callbacks": {}
    },
    "Div164": {
      "callbacks": {}
    },
    "Flex85": {
      "callbacks": {}
    },
    "Div165": {
      "callbacks": {}
    },
    "Div166": {
      "callbacks": {}
    },
    "Div167": {
      "callbacks": {}
    },
    "Div168": {
      "callbacks": {}
    },
    "Flex86": {
      "callbacks": {}
    },
    "Flex87": {
      "callbacks": {}
    },
    "Div172": {
      "callbacks": {}
    },
    "Div169": {
      "callbacks": {}
    },
    "Div173": {
      "callbacks": {}
    },
    "Flex89": {
      "callbacks": {}
    },
    "Flex88": {
      "callbacks": {}
    },
    "Div174": {
      "callbacks": {}
    },
    "Div180": {
      "callbacks": {}
    },
    "Flex93": {
      "callbacks": {}
    },
    "Flex91": {
      "callbacks": {}
    },
    "Div175": {
      "callbacks": {}
    },
    "Flex90": {
      "callbacks": {}
    },
    "Div179": {
      "callbacks": {}
    },
    "Flex92": {
      "callbacks": {}
    },
    "Div176": {
      "callbacks": {}
    },
    "Div177": {
      "callbacks": {}
    },
    "Div192": {
      "callbacks": {}
    },
    "Flex101": {
      "callbacks": {}
    },
    "Flex99": {
      "callbacks": {}
    },
    "Div187": {
      "callbacks": {}
    },
    "Flex98": {
      "callbacks": {}
    },
    "Div191": {
      "callbacks": {}
    },
    "Flex100": {
      "callbacks": {}
    },
    "Div188": {
      "callbacks": {}
    },
    "Div189": {
      "callbacks": {}
    },
    "Div198": {
      "callbacks": {}
    },
    "Flex105": {
      "callbacks": {}
    },
    "Flex103": {
      "callbacks": {}
    },
    "Div193": {
      "callbacks": {}
    },
    "Flex102": {
      "callbacks": {}
    },
    "Div197": {
      "callbacks": {}
    },
    "Flex104": {
      "callbacks": {}
    },
    "Div194": {
      "callbacks": {}
    },
    "Div195": {
      "callbacks": {}
    },
    "Div204": {
      "callbacks": {}
    },
    "Flex109": {
      "callbacks": {}
    },
    "Flex107": {
      "callbacks": {}
    },
    "Div199": {
      "callbacks": {}
    },
    "Flex106": {
      "callbacks": {}
    },
    "Div203": {
      "callbacks": {}
    },
    "Flex108": {
      "callbacks": {}
    },
    "Div200": {
      "callbacks": {}
    },
    "Div201": {
      "callbacks": {}
    },
    "Div205": {
      "callbacks": {}
    },
    "Flex110": {
      "callbacks": {}
    },
    "Div206": {
      "callbacks": {}
    },
    "Div207": {
      "callbacks": {}
    },
    "Div208": {
      "callbacks": {}
    },
    "Div209": {
      "callbacks": {}
    },
    "Flex116": {
      "callbacks": {}
    },
    "Flex117": {
      "callbacks": {}
    },
    "Div210": {
      "callbacks": {}
    },
    "Div211": {
      "callbacks": {}
    },
    "Flex118": {
      "callbacks": {}
    },
    "Div212": {
      "callbacks": {}
    },
    "Div213": {
      "callbacks": {}
    },
    "Div214": {
      "callbacks": {}
    },
    "Flex119": {
      "callbacks": {}
    },
    "Div215": {
      "callbacks": {}
    },
    "Div216": {
      "callbacks": {}
    },
    "Div239": {
      "callbacks": {}
    },
    "Flex128": {
      "callbacks": {}
    },
    "Flex127": {
      "callbacks": {}
    },
    "Flex126": {
      "callbacks": {}
    },
    "Div235": {
      "callbacks": {}
    },
    "Div238": {
      "callbacks": {}
    },
    "Div236": {
      "callbacks": {}
    },
    "Div237": {
      "callbacks": {}
    },
    "Div234": {
      "callbacks": {}
    },
    "Flex125": {
      "callbacks": {}
    },
    "Flex124": {
      "callbacks": {}
    },
    "Flex123": {
      "callbacks": {}
    },
    "Div230": {
      "callbacks": {}
    },
    "Div233": {
      "callbacks": {}
    },
    "Div231": {
      "callbacks": {}
    },
    "Div232": {
      "callbacks": {}
    },
    "Div217": {
      "callbacks": {}
    },
    "Flex120": {
      "callbacks": {}
    },
    "Div218": {
      "callbacks": {}
    },
    "Div221": {
      "callbacks": {}
    },
    "Div224": {
      "callbacks": {}
    },
    "Flex121": {
      "callbacks": {}
    },
    "Div226": {
      "callbacks": {}
    },
    "Flex122": {
      "callbacks": {}
    },
    "Div256": {
      "callbacks": {}
    },
    "Div252": {
      "callbacks": {}
    },
    "Flex135": {
      "callbacks": {}
    },
    "Flex132": {
      "callbacks": {}
    },
    "Div242": {
      "callbacks": {}
    },
    "Flex129": {
      "callbacks": {}
    },
    "Flex139": {
      "callbacks": {}
    },
    "Div249": {
      "callbacks": {}
    },
    "Div240": {
      "callbacks": {}
    },
    "Div241": {
      "callbacks": {}
    },
    "Div259": {
      "callbacks": {}
    },
    "Div253": {
      "callbacks": {}
    },
    "Flex136": {
      "callbacks": {}
    },
    "Flex133": {
      "callbacks": {}
    },
    "Div245": {
      "callbacks": {}
    },
    "Flex130": {
      "callbacks": {}
    },
    "Flex140": {
      "callbacks": {}
    },
    "Div250": {
      "callbacks": {}
    },
    "Div243": {
      "callbacks": {}
    },
    "Div244": {
      "callbacks": {}
    },
    "Div258": {
      "callbacks": {}
    },
    "Div254": {
      "callbacks": {}
    },
    "Flex137": {
      "callbacks": {}
    },
    "Flex134": {
      "callbacks": {}
    },
    "Flex131": {
      "callbacks": {}
    },
    "Div246": {
      "callbacks": {}
    },
    "Flex138": {
      "callbacks": {}
    },
    "Div251": {
      "callbacks": {}
    },
    "Div247": {
      "callbacks": {}
    },
    "Div248": {
      "callbacks": {}
    },
    "Div257": {
      "callbacks": {}
    },
    "Div255": {
      "callbacks": {}
    },
    "Div260": {
      "callbacks": {}
    },
    "Flex141": {
      "callbacks": {}
    },
    "Div261": {
      "callbacks": {}
    },
    "Div262": {
      "callbacks": {}
    },
    "Flex142": {
      "callbacks": {}
    },
    "Div263": {
      "callbacks": {}
    },
    "Div264": {
      "callbacks": {}
    },
    "Flex143": {
      "callbacks": {}
    },
    "Div265": {
      "callbacks": {}
    },
    "Div266": {
      "callbacks": {}
    },
    "Div267": {
      "callbacks": {}
    },
    "Div268": {
      "callbacks": {}
    },
    "Div269": {
      "callbacks": {}
    },
    "Div270": {
      "callbacks": {}
    },
    "Div271": {
      "callbacks": {}
    },
    "Div272": {
      "callbacks": {}
    },
    "Flex144": {
      "callbacks": {}
    },
    "Flex145": {
      "callbacks": {}
    },
    "Flex147": {
      "callbacks": {}
    },
    "Flex146": {
      "callbacks": {}
    },
    "Div274": {
      "callbacks": {}
    },
    "Flex148": {
      "callbacks": {}
    },
    "Div275": {
      "callbacks": {}
    },
    "Div276": {
      "callbacks": {}
    },
    "Flex149": {
      "callbacks": {}
    },
    "Flex150": {
      "callbacks": {}
    },
    "Div289": {
      "callbacks": {}
    },
    "Div277": {
      "callbacks": {}
    },
    "Div278": {
      "callbacks": {}
    },
    "Flex151": {
      "callbacks": {}
    },
    "Div279": {
      "callbacks": {}
    },
    "Flex153": {
      "callbacks": {}
    },
    "Div282": {
      "callbacks": {}
    },
    "Div281": {
      "callbacks": {}
    },
    "Flex155": {
      "callbacks": {}
    },
    "Flex154": {
      "callbacks": {}
    },
    "Div280": {
      "callbacks": {}
    },
    "Div285": {
      "callbacks": {}
    },
    "Div284": {
      "callbacks": {}
    },
    "Flex157": {
      "callbacks": {}
    },
    "Flex156": {
      "callbacks": {}
    },
    "Div283": {
      "callbacks": {}
    },
    "Div288": {
      "callbacks": {}
    },
    "Div287": {
      "callbacks": {}
    },
    "Flex159": {
      "callbacks": {}
    },
    "Flex158": {
      "callbacks": {}
    },
    "Div286": {
      "callbacks": {}
    },
    "Div302": {
      "callbacks": {}
    },
    "Div298": {
      "callbacks": {}
    },
    "Div294": {
      "callbacks": {}
    },
    "Flex164": {
      "callbacks": {}
    },
    "Div290": {
      "callbacks": {}
    },
    "Flex160": {
      "callbacks": {}
    },
    "Div299": {
      "callbacks": {}
    },
    "Div295": {
      "callbacks": {}
    },
    "Flex165": {
      "callbacks": {}
    },
    "Div291": {
      "callbacks": {}
    },
    "Flex161": {
      "callbacks": {}
    },
    "Div300": {
      "callbacks": {}
    },
    "Div296": {
      "callbacks": {}
    },
    "Flex166": {
      "callbacks": {}
    },
    "Div292": {
      "callbacks": {}
    },
    "Flex162": {
      "callbacks": {}
    },
    "Div301": {
      "callbacks": {}
    },
    "Div297": {
      "callbacks": {}
    },
    "Flex167": {
      "callbacks": {}
    },
    "Flex163": {
      "callbacks": {}
    },
    "Div293": {
      "callbacks": {}
    },
    "Div303": {
      "callbacks": {}
    },
    "Flex168": {
      "callbacks": {}
    },
    "Flex169": {
      "callbacks": {}
    },
    "Div304": {
      "callbacks": {}
    },
    "Flex170": {
      "callbacks": {}
    },
    "Div305": {
      "callbacks": {}
    },
    "Div306": {
      "callbacks": {}
    },
    "Flex171": {
      "callbacks": {}
    },
    "Flex172": {
      "callbacks": {}
    },
    "Div307": {
      "callbacks": {}
    },
    "Flex173": {
      "callbacks": {}
    },
    "Div308": {
      "callbacks": {}
    },
    "Div309": {
      "callbacks": {}
    },
    "Div310": {
      "callbacks": {}
    },
    "Div311": {
      "callbacks": {}
    },
    "Div312": {
      "callbacks": {}
    },
    "Div313": {
      "callbacks": {}
    },
    "Div314": {
      "callbacks": {}
    },
    "Div315": {
      "callbacks": {}
    },
    "Div316": {
      "callbacks": {}
    },
    "Div317": {
      "callbacks": {}
    },
    "Div318": {
      "callbacks": {}
    },
    "Image1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/WhatsApp%20Image%202022-12-22%20at%206.59.35%20PM.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox13": {
      "custom": {
        "text": "Portfolio Creater"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox19": {
      "custom": {
        "text": "."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox14": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox15": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox16": {
      "custom": {
        "text": "Book a Call"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox17": {
      "custom": {
        "text": "Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox18": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox23": {
      "custom": {
        "text": "I design products"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox24": {
      "custom": {
        "text": "that delight and inspire people. "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox25": {
      "custom": {
        "text": "Hi! I’m Bill Gates, a  product designer based in America.          I create user-friendly interfaces for fast-growing startups."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image4": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/WhatsApp%20Image%202022-12-22%20at%206.59.35%20PM.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image11": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/WhatsApp%20Image%202022-12-23%20at%206.10.54%20PM.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox26": {
      "custom": {
        "text": "Book a Call"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox27": {
      "custom": {
        "text": "Downlod CV"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/billl.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox28": {
      "custom": {
        "text": "Trusted by"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image7": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6078b0cd748b8581836fddf5_Group%2520334%5B1%5D.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image10": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Screenshot%202022-12-23%20175922.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image8": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Screenshot%202022-12-23%20175632.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image9": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Screenshot%202022-12-23%20175823.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox29": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox30": {
      "custom": {
        "text": "Design that solves problems, one product at a time."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image13": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef584362e74acfa6b75398_Group%252051%5B1%5D.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox34": {
      "custom": {
        "text": "What I can do for you"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox35": {
      "custom": {
        "text": "Faster, better products that your users love. Here's all the services I provide:"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex35": {
      "callbacks": {}
    },
    "TextBox36": {
      "custom": {
        "text": "Design Strategy"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex36": {
      "callbacks": {}
    },
    "TextBox37": {
      "custom": {
        "text": "Web and Mobile App Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex38": {
      "callbacks": {}
    },
    "TextBox38": {
      "custom": {
        "text": "Front-end Development"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex50": {
      "callbacks": {}
    },
    "TextBox44": {
      "custom": {
        "text": "Figma"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex51": {
      "callbacks": {}
    },
    "TextBox45": {
      "custom": {
        "text": "Webflow"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex52": {
      "callbacks": {}
    },
    "TextBox46": {
      "custom": {
        "text": "Sketch"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox47": {
      "custom": {
        "text": "Every designer needs the right tools to do the perfect job. Thankfully, I'm multilingual."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox48": {
      "custom": {
        "text": "Applications I'm fluent in"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image15": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef5843b6409375f7c23f2b_Group%252017%5B1%5D.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex57": {
      "callbacks": {}
    },
    "TextBox49": {
      "custom": {
        "text": "Efficient and maintainable"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex58": {
      "callbacks": {}
    },
    "TextBox50": {
      "custom": {
        "text": "Device and User friendly"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex59": {
      "callbacks": {}
    },
    "TextBox51": {
      "custom": {
        "text": "Clean and Functional"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox52": {
      "custom": {
        "text": "I design products that are more than pretty. I make them shippable and usable."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox53": {
      "custom": {
        "text": "What you can expect"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image16": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef58435ceaed068dde60ca_Group%252016%5B1%5D.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox59": {
      "custom": {
        "text": "P R O J E C T S"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox60": {
      "custom": {
        "text": "I bring results.  "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox63": {
      "custom": {
        "text": "My clients are proof."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image19": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/WhatsApp%20Image%202022-12-23%20at%206.10.54%20PM.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox62": {
      "custom": {
        "text": "View all Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image20": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6077dcc78ec31466630c033f_image_processing20200129-19798-1k8ponz%25202-min%5B1%5D.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox66": {
      "custom": {
        "text": "PRODUCT   DESIGN"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox67": {
      "custom": {
        "text": "Datadash product design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox68": {
      "custom": {
        "text": "View Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image21": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5ff019fc559a4200eda62273_Vector%5B1%5D.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image22": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5ff019fc559a4200eda62273_Vector%5B1%5D.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox69": {
      "custom": {
        "text": "View Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox71": {
      "custom": {
        "text": "Maize website design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox70": {
      "custom": {
        "text": "Web Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image23": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6077dcd635f7f176db9fef1e_image_processing20200129-19798-1k8ponz%25203-min%5B1%5D.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image25": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6077dc9bcd0f7a437038f60d_image_processing20200129-19798-1k8ponz%25201-min%5B1%5D.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox72": {
      "custom": {
        "text": "BRANDING"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox74": {
      "custom": {
        "text": "Soulful Rebrand"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox73": {
      "custom": {
        "text": "View Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image24": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5ff019fc559a4200eda62273_Vector%5B1%5D.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox75": {
      "custom": {
        "text": "B L O G S"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox76": {
      "custom": {
        "text": "Latest Blogs"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox77": {
      "custom": {
        "text": "View all"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image26": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef584aacad011eafeb61bc_Vector-2%5B1%5D.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div170": {
      "callbacks": {}
    },
    "TextBox78": {
      "custom": {
        "text": "April 16, 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox79": {
      "custom": {
        "text": "6 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox80": {
      "custom": {
        "text": "Design tips for designers, that cover everything you need"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image27": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef584aacad011eafeb61bc_Vector-2%5B1%5D.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox81": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox82": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image28": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef584aacad011eafeb61bc_Vector-2%5B1%5D.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox85": {
      "custom": {
        "text": "22 best UI design tools"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div178": {
      "callbacks": {}
    },
    "TextBox83": {
      "custom": {
        "text": "7 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox84": {
      "custom": {
        "text": "April 16, 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox90": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image30": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef584aacad011eafeb61bc_Vector-2%5B1%5D.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox93": {
      "custom": {
        "text": "Top 6 free website mockup tools 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div190": {
      "callbacks": {}
    },
    "TextBox91": {
      "custom": {
        "text": "6 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox92": {
      "custom": {
        "text": "April 16, 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox94": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image31": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef584aacad011eafeb61bc_Vector-2%5B1%5D.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox97": {
      "custom": {
        "text": "Logo design trends to avoid in 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div196": {
      "callbacks": {}
    },
    "TextBox95": {
      "custom": {
        "text": "6 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox96": {
      "custom": {
        "text": "April 16, 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox98": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image32": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef584aacad011eafeb61bc_Vector-2%5B1%5D.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox101": {
      "custom": {
        "text": "How to build rapport with your web design clients"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div202": {
      "callbacks": {}
    },
    "TextBox99": {
      "custom": {
        "text": "5 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox100": {
      "custom": {
        "text": "April 16, 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox102": {
      "custom": {
        "text": "PRODUCT DESIGNER"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox103": {
      "custom": {
        "text": "That's me!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox104": {
      "custom": {
        "text": "Over the past 12 years, I've worked with a diverse range of clients, from startups to Fortune 500 companies. I love crafting interfaces that delight users and help businesses grow."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image34": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/60751db05a9a1b47d320c2a0_image_processing20200129-19798-1k8ponz%25207-min%5B1%5D.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image35": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/60751db04d121379342550c6_image_processing20200129-19798-1k8ponz%252011-min%5B1%5D.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image36": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/60751db006dd19aa20e10edf_image_processing20200129-19798-1k8ponz%252012-min%5B1%5D.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image37": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/60751db0f84d7b28be5d1883_image_processing20200129-19798-1k8ponz%252013-min%5B1%5D.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox105": {
      "custom": {
        "text": "📚  Education"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image40": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef5843523345463e5a1851_arrow-right-up-line%25206%5B1%5D.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox113": {
      "custom": {
        "text": "• 2009-2012"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox114": {
      "custom": {
        "text": "BSc in Software Engineering"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox115": {
      "custom": {
        "text": "California State University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image39": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef5843523345463e5a1851_arrow-right-up-line%25206%5B1%5D.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox110": {
      "custom": {
        "text": "• 2013-2014"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox111": {
      "custom": {
        "text": "UX Training Bootcamp"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox112": {
      "custom": {
        "text": "MIT Summer School"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox106": {
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox108": {
      "custom": {
        "text": "MSc (Human Computer Interaction)"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox109": {
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image38": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef5843523345463e5a1851_arrow-right-up-line%25206%5B1%5D.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox118": {
      "custom": {
        "text": "• April 2016 - May 2017"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image41": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef5843523345463e5a1851_arrow-right-up-line%25206%5B1%5D.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox116": {
      "custom": {
        "text": "Kingdom"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox117": {
      "custom": {
        "text": "UI Designer"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image46": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6087cab33450e64d2fa55138_Group%252086%5B1%5D.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox121": {
      "custom": {
        "text": "• April 2016 - May 2017"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image42": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef5843523345463e5a1851_arrow-right-up-line%25206%5B1%5D.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox119": {
      "custom": {
        "text": "MusicMash"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox120": {
      "custom": {
        "text": "Information Architect"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image45": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6087cab3f70370b7efe8c560_Group%252085%5B1%5D.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image43": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef5843523345463e5a1851_arrow-right-up-line%25206%5B1%5D.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox122": {
      "custom": {
        "text": "• April 2019 - Current"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox123": {
      "custom": {
        "text": "Senior Product Designer"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox124": {
      "custom": {
        "text": "SpaceFleet"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image44": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6087cab3a74dfa369ea2e92a_Group%252084%5B1%5D.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox125": {
      "custom": {
        "text": "💼  Work Experience"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox126": {
      "custom": {
        "text": "Testimonials"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox128": {
      "custom": {
        "text": "Word on the street"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image47": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Screenshot%202022-12-28%20125022.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image48": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5ff6a53da27356854576b920_Group%252058%5B1%5D.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox129": {
      "custom": {
        "text": "Jade helped us build a software so intuitive that it didn't need a walkthrough. He solved complex problems with brilliant design."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox130": {
      "custom": {
        "text": "John Frankin"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox131": {
      "custom": {
        "text": "Founder, Double Bunch"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image49": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef584ac8595f0e43b2b567_Vector-1%5B1%5D.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image50": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef584a5ceaed4f77de60cb_Vector%5B1%5D.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox132": {
      "custom": {
        "text": "FAQ"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox133": {
      "custom": {
        "text": "Frequently asked questions"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox134": {
      "custom": {
        "text": "What time-zone do you work in?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image51": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef58435e05bd67f4a4c972_arrow-down-s-line%25201%5B1%5D.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image52": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef58435e05bd67f4a4c972_arrow-down-s-line%25201%5B1%5D.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox135": {
      "custom": {
        "text": "What is the typical timeline for a project?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image53": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef58435e05bd67f4a4c972_arrow-down-s-line%25201%5B1%5D.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox136": {
      "custom": {
        "text": "What type of projects do you take on?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image54": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef58435e05bd67f4a4c972_arrow-down-s-line%25201%5B1%5D.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox137": {
      "custom": {
        "text": "What is your hourly rate?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox138": {
      "custom": {
        "text": "What does your design process look like?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image55": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef58435e05bd67f4a4c972_arrow-down-s-line%25201%5B1%5D.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox139": {
      "custom": {
        "text": "How do you charge for projects ?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image56": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef58435e05bd67f4a4c972_arrow-down-s-line%25201%5B1%5D.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox140": {
      "custom": {
        "text": "What if I need help after the project is complete?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image57": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef58435e05bd67f4a4c972_arrow-down-s-line%25201%5B1%5D.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image58": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef58435e05bd67f4a4c972_arrow-down-s-line%25201%5B1%5D.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox141": {
      "custom": {
        "text": "What metrics do you use to measure success?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox142": {
      "custom": {
        "text": "Ready to make something kickass?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox143": {
      "custom": {
        "text": "Let's get on a call."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image59": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6078d43538e88cf2a8ff4464_White%2520Logo%5B1%5D.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox144": {
      "custom": {
        "text": "4353 Delaware Avenue, San Francisco, USA"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image60": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/60792c7df85964dafaa3825d_Vector%5B1%5D.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox145": {
      "custom": {
        "text": "hi@thefolio.com"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox146": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox147": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox148": {
      "custom": {
        "text": "Experience"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox149": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox150": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox151": {
      "custom": {
        "text": "Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox152": {
      "custom": {
        "text": "Dribbble"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox153": {
      "custom": {
        "text": "Instagram"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox154": {
      "custom": {
        "text": "Twitter"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox155": {
      "custom": {
        "text": "© All rights reserved .  Sourabh Mahesh Bajaj "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  }
}};

useStore.setState(desktopModeProps);

export default useStore;
