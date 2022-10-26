export default function TextEditor(props) {
  return (
    <div class="flex px-2 sm:text-sm loc-mono Comment">
      <div class="w-1/5">
        {Array.from(Array(25), (e, i) => {
          return <p>{i + 1}</p>;
        })}
      </div>
      <div class="Comment w-4/5 font-thin pl-2">
        <p># Welcome to the uae national day for programmers </p>
        <p>
          # in this software program we will show you how easy it is to write
          your first line of code
        </p>
        <p>
          # anything after the ‘#’ will be ignored by the software, we call
          these comments
        </p>
        <br></br>
        <p className="Foreground">
          <span className="Pink">import</span> pandas{" "}
          <span className="Pink">as</span> pb
        </p>
        <p className="Foreground">
          <span className="Pink">import</span> pytorch
        </p>
        <p className="Foreground">
          <span className="Pink">import</span> numpy{" "}
          <span className="Pink">as</span> np
        </p>
        <br></br>
        <p>
          # import statemenets like the one above are used to import needed
          functionality
        </p>
        <p>
          # the below is a print statement, it prints what you want to show to
          the console
        </p>
        <p>
          # add the line you want to print inside the “” marks then click the
          green icon{" "}
        </p>
        <br></br>
        <div className="flex items-center mt-2">
          <div>
            <span className="Green">print</span>
            <span>(</span>
            <span className="Yellow">"</span>
          </div>

          {/* input here  */}

          <input
            type="text"
            id="small-input"
            placeholder="Type your code here..."
            onChange={props.handleChange}
            maxLength="100"
            class=" Yellow bg-gray-900 flex-1 rounded-lg border border-gray-900 sm:text-xs focus:ring-blue-500 focus:border-blue-500 "
          />
          <div>
            <span className="Yellow">"</span>
            <span>)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
