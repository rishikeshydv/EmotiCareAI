import torch
from transformers import AutoTokenizer, AutoModelForSequenceClassification

# Define the emotions dictionary
emotions = {
    0: 'Very Negative',
    1: 'Negative',
    2: 'Neutral',
    3: 'Positive',
    4: 'Very Positive'
}

def analyze_sentiment(text):
    # Load pre-trained tokenizer and model
    model_name = "nlptown/bert-base-multilingual-uncased-sentiment"
    tokenizer = AutoTokenizer.from_pretrained(model_name)
    model = AutoModelForSequenceClassification.from_pretrained(model_name)

    # Tokenize the text and prepare input tensors
    inputs = tokenizer(text, return_tensors="pt", truncation=True, padding=True)
    with torch.no_grad():
        # Forward pass through the model
        outputs = model(**inputs)

    # Get the predicted sentiment label
    predicted_label = torch.argmax(outputs.logits).item()
    sentiment = emotions[predicted_label]

    return sentiment

# Test the sentiment analysis function
text_to_analyze = "I love this product! It's amazing."
sentiment_result = analyze_sentiment(text_to_analyze)
print("Sentiment:", sentiment_result)
