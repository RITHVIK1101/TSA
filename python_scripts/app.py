import json
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/get_tax_incentives', methods=['GET'])
def get_tax_incentives():
    # Read the JSON file
    with open('tax-incentives.json', 'r') as file:
        tax_incentives = json.load(file)

    # Get the state parameter from the request
    selected_state = request.args.get('state')

    # Filter tax incentives data based on the selected state
    filtered_data = [item for item in tax_incentives if item['state'] == selected_state]

    # Send the filtered data as JSON response
    return jsonify(filtered_data)

if __name__ == '__main__':
    app.run(debug=True)
