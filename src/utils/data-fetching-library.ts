class BaseResource<Data> {
  data: Data | undefined = undefined;
  status = "pending";
  error = undefined;
  promise: Promise<void> | null = null;
  read(): Data {
    switch (this.status) {
      case "pending":
        throw this.promise;
      case "error":
        throw this.error;
      default:
        return this.data!;
    }
  }
}

export class AsyncResource<Data> extends BaseResource<Data> {
  constructor(promise: Promise<Data>) {
    super();
    this.promise = promise
      .then((data) => {
        this.status = "success";
        this.data = data;
      })
      .catch((error) => {
        this.status = "error";
        this.error = error;
      });
  }
}
