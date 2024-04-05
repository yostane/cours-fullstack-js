# Notes

```js
app.patch("/planets/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  const f = (planet) => planet.id === req.params.id;
  const plannet = planets.find(f);
  find(f, planets);
});

function find(f, items) {
  for (item of items) {
    if (f(item) === true) {
      return item;
    }
  }
}
```
