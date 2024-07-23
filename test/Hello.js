const { expect } = require("chai");

describe("Hello", function () {
  it("Contract has been deployed successfully", async function () {

    const hardhatHello = await ethers.deployContract("Hello");
    expect(hardhatHello , "contract has been deployed");
  });
});

describe("Hello variable test", function() {
  it("contract variable set appropriately", async function() {
    const hardhatHello  = await ethers.deployContract("Hello");
    expect(await hardhatHello.storedData()).to.equal("Hello, World");
 

  });
});


describe("owner()", function(){
  it("returns the address of the owner", async function(){
	  const hardhatHello = await ethers.deployContract("Hello");
	  const contractAddress = await hardhatHello.address;
	  expect(contractAddress, "The current owner");
          const [deployer] = await ethers.getSigners();
	  const owners = await ethers.getSigners();
	  //expect(deployer).to.equal(owner);
          expect(deployer,"The current deployer");
          expect(deployer).to.equal(deployer);
          expect(deployer.address).to.equal(hardhatHello.runner.address);

  });
});



describe("set hello!", function(){
  it("test my set function", async function(){
          const hardhatHello = await ethers.deployContract("Hello");
          await hardhatHello.set("Hello Again");
          expect(await hardhatHello.get()).to.equal("Hello Again");
  });

});



describe("set hello!", function(){
  it("test my set function", async function(){
          const hardhatHello = await ethers.deployContract("Hello");
          const owners = await ethers.getSigners();

	  try {
	  await hardhatHello.set("Hello Again",{ from: owners[1] } );
  }
	catch(err){
			const errM = "caller is not owner"
	  expect(err).to.equal(errM)
return;
	} 


  });

});



describe("set hello! the right way", function(){
  it("test my set function", async function(){
          const hardhatHello = await ethers.deployContract("Hello");
          const owners = await ethers.getSigners();

          try {
          await hardhatHello.set("Hello Again",{ from: owners[0] } );
  }
        catch(err){
                        const errM = "caller is not owner"
          expect(err).to.equal(errM)
return;
        }


  });

});


//	  expect(contractAddress, "The current owner");
  //        const [deployer] = await ethers.getSigners();
    //      const owners = await ethers.getSigners();
          //expect(deployer).to.equal(owner);
      //    expect(deployer,"The current deployer");
        //  expect(deployer).to.equal(deployer);
//          expect(deployer.address).to.equal(hardhatHello.runner.address);

//  });
//});






/// more work to do!
//
//
//contract("Greeter: update greeting", (accounts) => {
//  describe("setGreeting(string)", () => {
//    describe("when message is sent by the owner", () => {
//      it("sets greeting to passed in string", async () => {
//        const greeter = await GreeterContract.deployed()
//        const expected = "The owner changed the message";
//
//        await greeter.setGreeting(expected);
//        const actual = await greeter.greet();
//
//        assert.equal(actual, expected, "greeting updated");
//      });
//    });

//    describe("when message is sent by another account", () => {
//      it("does not set the greeting", async () => {
//        const greeter = await GreeterContract.deployed()
//        const expected = await greeter.greet();

//        try {
//          await greeter.setGreeting("Not the owner", { from: accounts[1] });
//        } catch(err) {
//          const errorMessage = "Ownable: caller is not the owner"
//          assert.equal(err.reason, errorMessage, "greeting should not update");
//          return;
//        }
//        assert(false, "greeting should not update");
//      });
//    });
//  });
//});

