import { rest } from "msw";

export const handlers = [
  rest.get("/expenses", (req, res, ctx) => {
    const income = 150873;
    const expenses = 89983;
    const balance = income - expenses;
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
];
