export default async function handler(req, res) {
    const { symbol } = req.query;
    const apiKey = process.env.POLYGON_API_KEY; 
  
    if (!symbol) {
      return res.status(400).json({ error: "Stock symbol is required" });
    }
  
    try {
      const response = await fetch(
        `https://api.polygon.io/v2/aggs/ticker/${symbol}/prev?adjusted=true&apiKey=${apiKey}`
      );
  
      if (!response.ok) {
        throw new Error(`Polygon API error: ${response.statusText}`);
      }
  
      const data = await response.json();
  
      if (data.results && data.results.length > 0) {
        const stock = data.results[0];
  
        res.status(200).json({
          ticker: symbol.toUpperCase(),
          open: stock.o,
          high: stock.h,
          low: stock.l,
          close: stock.c,
          volume: stock.v,
          date: new Date(stock.t).toDateString(),
          vwap: stock.vw,
        });
      } else {
        res.status(404).json({ error: "Stock data not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('active');
  });
  