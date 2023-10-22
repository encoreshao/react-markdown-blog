#### Useful Code Snippets

- Javascript and Ruby - Code Snippets

**Use `CreateContext` to Update Theme in React**

<Code language="javascript">
export const ThemeContext = createContext({
theme: "",
setTheme: (theme: string) => {},
});
</Code>

**Get current Time in Ruby**

<Code language="javascript">
> Time.now
=> 2023-10-06 23:06:48.679759 +0800
</Code>

**Array Sort in Javascript**

<Code language="javascript">
// Strings
const names = ["Encore", "Shao", "Ruby"];
names.sort();
// ['Encore', 'Ruby', 'Shao' ]

// Numbers
const numbers = [100, 9, 77];
numbers.sort((a, b) => { return a - b; });
// [ 9, 77, 100 ]
</Code>

**Reverse a String in Javascript**

<Code language="javascript">
function reverseText(string) {
  return string.split(" ").reverse().join(" ")
}

reverseText("Encore Shao")
// 'Shao Encore'
</Code>

**Select a Random Value in Ruby**

<Code language="javascript">
> data = [1, 2, 3, 4, 5];
=> [1, 2, 3, 4, 5]
> puts data.sample
=> 5
</Code>

**Get current Time in Javascript**

<Code language="javascript">
const date = new Date()
const currentTime = ${date.getHours()}:${date.getMintues()}:${date.getSeconds()}

console.log("Example output: ", currentTimes)
// Example output: "20:10:11"
</Code>

**Destructing Variable Assignment**

<Code language="javascript">
let profile = ['Encore', 30, 'Software Engineer | Researcher'];
let [name, age, job] = profile;
console.log(name);
// Encore
</Code>

**Using The Spread Operator**

<Code language="javascript">
let data1 = [1, 2, 3, 4, 5];
console.log(...data);
// 1 2 3 4 5

let data2 = [6, 7, 8, 9, 10];
let combined = [...data1, ...data2];
console.log(...combined);
// 1 2 3 4 5 6 7 8 9 10

console.log(Math.max(...combined));
// 10
</Code>

**其他链接**

- [Previous - Rails + NVM](rails5nvm)
- [Next - Ruby on Rails](rubyonrails)

<br />
<br />
