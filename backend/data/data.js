const chats = [
  {
    isGroupChat: false,
    users: [
      {
        name: "Emma",
        email: "emma@example.com",
      },
      {
        name: "Alex",
        email: "alex@example.com",
      },
    ],
    _id: "617a077e18c25468bc7c4dd4",
    chatName: "Emma",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Demo User",
        email: "demo@example.com",
      },
      {
        name: "Alex",
        email: "alex@example.com",
      },
    ],
    _id: "617a077e18c25468b27c4dd4",
    chatName: "Demo User",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "David",
        email: "david@example.com",
      },
      {
        name: "Alex",
        email: "alex@example.com",
      },
    ],
    _id: "617a077e18c2d468bc7c4dd4",
    chatName: "David",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Emma",
        email: "emma@example.com",
      },
      {
        name: "Alex",
        email: "alex@example.com",
      },
      {
        name: "Demo User",
        email: "demo@example.com",
      },
    ],
    _id: "617a518c4081150716472c78",
    chatName: "Friends",
    groupAdmin: {
      name: "Demo User",
      email: "demo@example.com",
    },
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Sarah",
        email: "sarah@example.com",
      },
      {
        name: "Alex",
        email: "alex@example.com",
      },
    ],
    _id: "617a077e18c25468bc7cfdd4",
    chatName: "Sarah",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Emma",
        email: "emma@example.com",
      },
      {
        name: "Alex",
        email: "alex@example.com",
      },
      {
        name: "Demo User",
        email: "demo@example.com",
      },
    ],
    _id: "617a518c4081150016472c78",
    chatName: "Chill Zone",
    groupAdmin: {
      name: "Demo User",
      email: "demo@example.com",
    },
  },
];

module.exports = { chats };
