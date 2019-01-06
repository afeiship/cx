# next-clsx
> Another `className` strings conditionally based on next

## install:
```bash
npm install -S afeiship/next-clsx --registry=https://registry.npm.taobao.org
```

## usage:
```js
import 'next-clsx';

// Strings (variadic)
nx.clsx('foo', true && 'bar', 'baz');
//=> 'foo bar baz'

// Objects
nx.clsx({ foo:true, bar:false, baz:isTrue() });
//=> 'foo baz'

// Objects (variadic)
nx.clsx({ foo:true }, { bar:false }, null, { '--foobar':'hello' });
//=> 'foo --foobar'

// Arrays
nx.clsx(['foo', 0, false, 'bar']);
//=> 'foo bar'

// Arrays (variadic)
nx.clsx(['foo'], ['', 0, false, 'bar'], [['baz', [['hello'], 'there']]]);
//=> 'foo bar baz hello there'

// Kitchen sink (with nesting)
nx.clsx('foo', [1 && 'bar', { baz:false, bat:null }, ['hello', ['world']]], 'cya');
//=> 'foo bar hello world cya'
```
