### css selectors and combinators

Selectors :-
!-- 
Id selector -(#) has higher priority than class selector

class selector - (.) has higher priority than tag names

tag name - has high priority than universal selector

universal selector - (only *) which applies styles for entire html code


Inline style > Id >  class > tag > universal
(  #  >  .  >  (tag name)  >  *  )


# styling inside a tag is called inline selector


Combinators :-

# these are used to prevent more using from ID and CLASS selectors

There are 4 types of combinators

1. Descendant selector (denoted with space ( ))  --> multi-level down
2. child selector (>)  --> only applied to tags which are one down level
3. general sibling selector (~)  --> all the same tags which are below the elder sibling tag
4. adjacent sibling selector (+)  --> applied to only next 
one level tag

# pseudo class (:) in style if we wanna use pseudo class we use : like hover

# pseudo elements symbol (::) first-line,first-letter etc.,