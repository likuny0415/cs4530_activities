Names: 
Kunyang Li, li.kuny@northeastern.edu
Dezeng Kong, kong.dez@northeastern.edu

In a text file, list several ways in which Whitley’s code violates the 5 Principles.
- The time between color changes of the traffic light is hard coded to be the same for all traffic lights, which is not true
- The time between color changes of the traffic light is hard coded to be the same for all color transitions, which may not be true
- The variable name for storing the current traffic light color is “color” which is confusing, the name can be improved such as “currentTrafficLightColor”
- The function name for getting the current traffic light color is called “getColor()” which is confusing, can be named like “getCurrentTrafficLightColor()”
- The function setTime should be better named ‘setTimeLeft(time: number)’, also the variable t should be named time which is more readable.
- The function “colorAtNextSecond()” should be put inside of the class “TrafficLight” since this function is only used within “TrafficLight”

Now look at your own code. Based on your experience with traffic lights, list 3 assumptions that your code makes about the behavior of traffic lights in a large city.
- Traffic conditions vary widely in a large city, with some intersections needing different green light durations due to factors like traffic volume, time of day, and congestion. The client is dissatisfied with the current inflexible traffic light timing approach.
- In many places, the sequence might be green -> yellow -> red -> green. Also, there can be additional signals like a flashing pedestrian signal or exclusive turn signals which are not captured in the current model.
- In some cities, traffic lights can be influenced by external factors like emergency vehicles, pedestrian requests, or traffic congestion sensors. Without considering these external influences, the simulation might not match real-world behavior.

