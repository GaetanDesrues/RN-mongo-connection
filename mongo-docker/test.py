# Import the MongoClient from pymongo library to connect to MongoDB
from pymongo import MongoClient

# Define the MongoDB connection URL, including the port number and database name
mongo_url = "mongodb://localhost:27057/mydatabase"

# Try to establish a connection to MongoDB using the MongoClient
try:
    # Create a MongoClient instance and connect to the specified URL
    client = MongoClient(mongo_url)
    
    # Check if the connection was successful
    if client:
        print("MongoDB connection established successfully!")

        # Create a sample document to insert into the database
        sample_document = {
            "name": "John Doe",
            "age": 30,
            "city": "New York"
        }

        # Select the database and collection you want to work with
        db = client.mydatabase
        collection = db.mycollection

        # Insert the sample document into the collection
        result = collection.insert_one(sample_document)

        # Check if the insertion was successful and print the inserted document's ID
        if result.inserted_id:
            print(f"Document inserted with ID: {result.inserted_id}")

            # Now, let's retrieve the inserted document and print it
            retrieved_document = collection.find_one({"_id": result.inserted_id})

            if retrieved_document:
                print("Retrieved Document:")
                print(retrieved_document)
            else:
                print("Failed to retrieve the document.")

        else:
            print("Failed to insert the document.")
    else:
        print("Failed to establish MongoDB connection.")
except Exception as e:
    print(f"An error occurred: {e}")
finally:
    # Close the MongoDB connection, if it was established
    if client:
        client.close()
