import { rest } from "msw";
const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const handlers = [
  rest.get("/expenses", async (req, res, ctx) => {
    const income = 150873;
    const expenses = 89983;
    const balance = income - expenses;
    await wait(500);
    return res(
      ctx.status(200),
      ctx.json({
        balance: {
          date: "June 2023",
          amount: balance,
        },
        income: {
          date: "June 2023",
          amount: income,
        },
        expenses: {
          date: "June 2023",
          amount: expenses,
        },
      })
    );
  }),

  rest.get("/mycards", async (req, res, ctx) => {
    await wait(500);
    return res(
      ctx.status(200),
      ctx.json([
        {
          cardName: "Gwendolyn Wintheiser",
          cardNumber: "4692 5825 2055 6327",
          cardDate: "04/26",
          cvv: 261,
        },
        {
          cardName: "Franklin Hand",
          cardNumber: "4179 2926 0517 5827",
          cardDate: "11/25",
          cvv: 761,
        },
        {
          cardName: "Wm Zulauf",
          cardNumber: "4686 3031 2290 6614",
          cardDate: "04/26",
          cvv: 921,
        },
      ])
    );
  }),

  rest.get("/transactions", async (req, res, ctx) => {
    await wait(500);
    return res(
      ctx.status(200),
      ctx.json({
        date: "7 August 2023",
        history: [
          {
            name: "Cash Withdrawal",
            timestamp: 1691408012,
            amount: 20129,
            type: "expenses",
          },
          {
            name: "Landing Page Project",
            timestamp: 1691408012,
            amount: 2000,
            type: "income",
          },
          {
            name: "June Mobile App Project",
            timestamp: 1691415032,
            amount: 20129,
            type: "income",
          },
        ],
      })
    );
  }),
];
