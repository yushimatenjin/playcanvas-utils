{
  /**
   * @name registerScript
   * @description This function easily adds a script written in a class to PlayCanvas.
   * @param {Object} App
   * @param {Object} attributeses
   * @returns {Object}
   * @example
   * class RotateToEntity{
   *  initialize(){
   *    console.log("function initialize() called")
   *   }
   *  update(){
   *    this.entity.rotate(0, 1, 0)
   *   }
   * }
   *
   * pc.registerScript(RotateToEntity)
   */

  const registerScript = (App, attributeses) => {
    const name = App.name.toLowerCase();
    const app = pc.createScript(name);
    if (attributeses !== undefined) {
      const attributes = Object.values(attributeses);
      for (let attr of attributes) {
        Object.entries(attr).forEach(item => {
          app.attributes.add(item[0], item[1]);
        });
      }
    }
    Object.setPrototypeOf(app.prototype, App.prototype);
  };

  if (typeof window.pc === object) {
    pc.extend(pc, {
      registerScript: registerScript
    });
  } else {
    // Support for External Scripts
    window.registerScript = registerScript;
  }
}
