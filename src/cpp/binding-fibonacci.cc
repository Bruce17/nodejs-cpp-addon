#include <node.h>
#include <v8.h>



int Fibonacci(int n) {
  if (n == 0) {
    return 0;
  }
  else if (n == 1) {
    return 1;
  }
  else {
    return (Fibonacci(n-1) + Fibonacci(n-2));
  }
}

int FibonacciLoop(int n) {
  int result = 0, first = 0, second = 0, c;
  
  for (c = 0; c < n; c++) {
    if (c <= 1) {
      result = c;
    }
    else {
      result = first + second;
      first = second;
      second = result;
    }
  }
  
  return result;
}



void getFibonacciRecursively(const v8::FunctionCallbackInfo<v8::Value>& args) {
  v8::Isolate* isolate = args.GetIsolate();
  v8::HandleScope scope(isolate);
  
  if (args.Length() < 1) {
    isolate->ThrowException(v8::String::NewFromUtf8(isolate, "Wrong number of arguments. Please define the number for which a fibonacci should be calculated."));
    return;
  }
  
  if (!args[0]->IsNumber()) {
    isolate->ThrowException(v8::String::NewFromUtf8(isolate, "First argument must be a number."));
    return;
  }
  
  int num = (int) args[0]->NumberValue();
  int result = Fibonacci(num);
  
  args.GetReturnValue().Set(result);
}

void getFibonacciLoop(const v8::FunctionCallbackInfo<v8::Value>& args) {
  v8::Isolate* isolate = args.GetIsolate();
  v8::HandleScope scope(isolate);
  
  if (args.Length() < 1) {
    isolate->ThrowException(v8::String::NewFromUtf8(isolate, "Wrong number of arguments. Please define the number for which a fibonacci should be calculated."));
    return;
  }
  
  if (!args[0]->IsNumber()) {
    isolate->ThrowException(v8::String::NewFromUtf8(isolate, "First argument must be a number."));
    return;
  }
  
  int num = (int) args[0]->NumberValue();
  int result = FibonacciLoop(num);
  
  args.GetReturnValue().Set(result);
}

void init(v8::Local<v8::Object> target) {
  NODE_SET_METHOD(target, "fibonacciRecursively", getFibonacciRecursively);
  NODE_SET_METHOD(target, "fibonacciLoop", getFibonacciLoop);
}

NODE_MODULE(binding, init);
