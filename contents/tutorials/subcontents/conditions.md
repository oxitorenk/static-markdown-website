---
title: "Conditions"
description: ""
order: 11
---

`Conditions` control whether a listener responds to an event or not. `Conditions` are specialized `Functions`.

The following script will add a condition for the type `int` to the Atom creation menu:

```
using UnityEngine;
using UnityAtoms;
using UnityAtoms.BaseAtoms;


[EditorIcon("atom-icon-sand")]


[CreateAssetMenu(menuName = "Unity Atoms/Conditions/Int/MultipleOf", fileName = "MultipleOf")]

public class MultipleOf : IntCondition
{
    
    public int multiple;

    public override bool Call(int value)
    {
        

        return value % multiple == 0;
    }
}

```


> **Note:** Use the generator to generate the corresponding `Condition` base class for any type you might need in your project.

Notice how the script extends the `IntCondition` class and the usual `Call` method of a `Function` returns a `bool`.

It is now possible to create new conditions for the type `int` under the path described in the script:

![create-condition](https://unity-atoms.github.io/unity-atoms/assets/conditions/create-condition.png)

Create two conditions and assign a different parameter for each:

![multiple-of-three](https://unity-atoms.github.io/unity-atoms/assets/conditions/multiple-of-three.png)

![multiple-of-five](https://unity-atoms.github.io/unity-atoms/assets/conditions/multiple-of-five.png)

Now these assets can be used in any `IntListener`. Create a simple logging script to test it out:

```
using UnityEngine;

public class LogSomething : MonoBehaviour
{
    public void Report(int value)
    {
        Debug.Log(gameObject.name + " reports: " + value);
    }
}

```


To test this, create an `IntEvent` called `SomeIntChanged`. This will be used to raise it from the `Inspector` during testing:

![test-int-event](https://unity-atoms.github.io/unity-atoms/assets/conditions/test-int-event.png)

Create a new `GameObject` and rename it to `Unfiltered` for testing purposes. Add an `IntEventReferenceListener` and `LogSomething` components to the `GameObject` and wire the listener to listen for `SomeIntChanged` event. Add a dynamic Unity Event response (the `Report` method of the `LogSomething` component of the same `GameObject`). The end result should look like this:

![unfiltered-gameobject](https://unity-atoms.github.io/unity-atoms/assets/conditions/unfiltered-gameobject.png)

Now `Unfiltered` will simply respond to any value passed when `SomeIntChanged` is raised. Enter play mode and test it by clicking on "Raise" from the `Inspector`. The console should log the value in the "Inspector Raise Value" field.

Duplicate `Unfiltered` and rename the duplicate to `Filtered`. Add the previously created condition assets to the `Conditions` array and choose a logical operator to test. `Filtered` now looks like this:

![filtered-gameobject](https://unity-atoms.github.io/unity-atoms/assets/conditions/filtered-gameobject.png)

Now enter play mode again and see that the conditions apply. The `Filtered` one only responds when the value fulfills either of the conditions, since the logical operator is `And`:

![conditions-in-use](https://unity-atoms.github.io/unity-atoms/assets/conditions/conditions-in-use.png)

That's it! The conditions are taking effect and can be swapped in or out in the `Inspector` without coding.