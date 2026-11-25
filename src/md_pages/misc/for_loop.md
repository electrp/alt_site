---
title: Removing complexity while improving speed by proving equivilence between code snippets
project: misc
tags:
    - tools
---

I recently came across a code snippet that I was tasked to optimize:
```c++
// number must be >= 0 and <= 256
// contact @Styr0foam if you go over this limit and i can extend it
public static bool IsEven(int: number) {
    if (number == 0)
        return true;
    if (number == 1)
        return false
    if (number == 2)
        return true;
    ...
    if (number == 256)
        return true;
    return false;
}
```

It took me a while, but using my vast intellect I was able to find that the last number will always tell you if the number is even or odd so as long as you have that last number you can tell

```cpp
// todo: test on negative numbers
// © William Bender 2026
bool IsEven(int: number) {
    std::string thing = std::to_string(number);
    switch(thing[thing.size()]) {
        case '0':
            return true;
        case '1':
            return false;
        case '2':
            return true;
        case '3':
            return false;
        case '4':
            return true;
        case '5':
            return false;
        case '6':
            return true;
        case '7':
            return false;
        case '8':
            return true; 
        case '9':
            return false;
        default: 
            return false;
    }
}
```

Thanks for your attention in this matter