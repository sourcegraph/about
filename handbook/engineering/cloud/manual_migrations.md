# Cloud manual migrations

Sourcegraph.com occassionally requires migrations be ran against it that are not ran against other deployments of Sourcegraph.

Examples of this include:

- Modifying DB users, which may not always be possible in customer environments https://github.com/sourcegraph/sourcegraph/pull/12561
- One-off index modification tests like https://twitter.com/beyang/status/1287826896281989120 that _should_ eventually become migrations in our product.

We soon want to eliminate the need for such manual migrations against prod ([tracking issue](https://github.com/sourcegraph/sourcegraph/issues/12590)), but in the meantime this document serves as a list of manual migrations that have been ran against production.

## Aug 3rd, 2020 - read only user addition

https://github.com/sourcegraph/sourcegraph/pull/12561

Exact SQL:

```sql
TODO(efritz,chayim)
```

## July 27th, 2020 - index addition

https://twitter.com/beyang/status/1287826896281989120

https://github.com/sourcegraph/sourcegraph/pull/12591

Exact SQL:

```sql
TODO(beyang,rijnard)
```
